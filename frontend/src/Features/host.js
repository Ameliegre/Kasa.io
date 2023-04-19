import { selectHost } from "../Utils/selector";
import { createAction, createReducer } from '@reduxjs/toolkit'
import axios from '../Api/axios'

//Déclaration du state initial
const initialState = {}

//Définition des actions
const hostFetching = createAction('host/fetching', (hostId) => ({
  payload: { hostId },
}))

const hostResolved = createAction(
  'host/resolved',
  (hostId, data) => ({
    payload: { hostId, data },
  })
)

const hostRejected = createAction(
  'host/rejected',
  (hostId, error) => ({
    payload: { hostId, error },
  })
)

//Verifie si il y a bien un Id existant
function setVoidIfUndefined(draft, hostId) {
  if (draft[hostId] === undefined) {
    draft[hostId] = { status: 'void' }
  }
}

//Création du Reducer qui implémente la logique en combinant action et le state
export default createReducer(initialState, (builder) =>
  builder
    .addCase(hostFetching, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.hostId)
      if (draft[action.payload.hostId].status === 'void') {
        draft[action.payload.hostId].status = 'pending'
        return
      }
      if (draft[action.payload.hostId].status === 'rejected') {
        draft[action.payload.hostId].error = null
        draft[action.payload.hostId].status = 'pending'
        return
      }
      if (draft[action.payload.hostId].status === 'resolved') {
        draft[action.payload.hostId].status = 'updating'
        return
      }
    })
    .addCase(hostResolved, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.hostId)
      if (
        draft[action.payload.hostId].status === 'pending' ||
        draft[action.payload.hostId].status === 'updating'
      ) {
        draft[action.payload.hostId].data = action.payload.data
        draft[action.payload.hostId].status = 'resolved'
        return
      }
      return
    })
    .addCase(hostRejected, (draft, action) => {
      setVoidIfUndefined(draft, action.payload.hostId)
      if (
        draft[action.payload.hostId].status === 'pending' ||
        draft[action.payload.hostId].status === 'updating'
      ) {
        draft[action.payload.hostId].error = action.payload.error
        draft[action.payload.hostId].data = null
        draft[action.payload.hostId].status = 'rejected'
        return
      }
      return
    })
)

////Action Asynchrone pour call API
export async function fetchOrUpdateHost(store, hostId) {
  const selectHostById = selectHost(hostId)
  const status = selectHostById(store.getState()).status
  if (status === 'pending' || status === 'updating') {
    return
  }
  store.dispatch(hostFetching(hostId))
  try {
    const response = await axios.get(`/api/me`)
    console.log(response)
    store.dispatch(hostResolved(hostId, response.data))
  } catch (error) {
    store.dispatch(hostRejected(hostId, error))
  }
}
