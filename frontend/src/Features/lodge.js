import { selectLodge } from '../Utils/selector'
import { createAction, createReducer } from '@reduxjs/toolkit'
import axios from '../Api/axios'

//Déclaration du state initial
const initialState = {}

//Définition des actions
const lodgeFetching = createAction('lodge/fetching', (lodgeId) => ({
  payload: { lodgeId },
}))

const lodgeResolved = createAction(
  'lodge/resolved',
  (lodgeId, data) => ({
    payload: { lodgeId, data },
  })
)

const lodgeRejected = createAction(
  'lodge/rejected',
  (lodgeId, error) => ({
    payload: { lodgeId, error },
  })
)

//Verifie si  
function setVoidIfUndefined(draft, lodgeId) {
  if (draft[lodgeId] === undefined) {
    draft[lodgeId] = { status: 'void' }
  }
}

//Création du Reducer qui implémente la logique en combinant action et le state
export default createReducer(initialState, (builder) =>
  builder
    .addCase(lodgeFetching, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.lodgeId)
      if (draft[action.payload.lodgeId].status === 'void') {
        draft[action.payload.lodgeId].status = 'pending'
        return
      }
      if (draft[action.payload.lodgeId].status === 'rejected') {
        draft[action.payload.lodgeId].error = null
        draft[action.payload.lodgeId].status = 'pending'
        return
      }
      if (draft[action.payload.lodgeId].status === 'resolved') {
        draft[action.payload.lodgeId].status = 'updating'
        return
      }
    })
    .addCase(lodgeResolved, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.lodgeId)
      if (
        draft[action.payload.lodgeId].status === 'pending' ||
        draft[action.payload.lodgeId].status === 'updating'
      ) {
        draft[action.payload.lodgeId].data = action.payload.data
        draft[action.payload.lodgeId].status = 'resolved'
        return
      }
      return
    })
    .addCase(lodgeRejected, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.lodgeId)
      if (
        draft[action.payload.lodgeId].status === 'pending' ||
        draft[action.payload.lodgeId].status === 'updating'
      ) {
        draft[action.payload.lodgeId].error = action.payload.error
        draft[action.payload.lodgeId].data = null
        draft[action.payload.lodgeId].status = 'rejected'
        return
      }
      return
    })
)

////Action Asynchrone pour call API
export async function fetchOrUpdateLodge(store, lodgeId) {
  const selectLodgeById = selectLodge(lodgeId)
  const status = selectLodgeById(store.getState()).status
  if (status === 'pending' || status === 'updating') {
    return
  }
  store.dispatch(lodgeFetching(lodgeId))
  try {
    const response = await axios.get(`/api/lodge/${lodgeId}`)
    store.dispatch(lodgeResolved(lodgeId, response.data[0]))
  } catch (error) {
    store.dispatch(lodgeRejected(lodgeId, error))
  }
}
