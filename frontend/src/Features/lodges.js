import { createAction, createReducer } from "@reduxjs/toolkit"
import { selectLodges } from '../Utils/selector'
import axios from '../Api/axios'

//Déclaration du state initial
const initialState = {
    status: 'void',
    data: null,
    error: null,
}

//Définition des actions
const lodgesFetching = createAction('lodges/fetching')
const lodgesResolved = createAction('lodges/resolved')
const lodgesRejected = createAction('lodges/rejected')

//Création du Reducer qui implémente la logique en combinant action et le state
export default createReducer(initialState, (builder) =>
    builder 
        // si l'action est de type Fetching
        .addCase(lodgesFetching, (draft) => {
        // si le statut est void
        if (draft.status === 'void') {
            // on passe en pending
            draft.status = 'pending'
            return
        }
        // si le statut est rejected
        if (draft.status === 'rejected') {
            // on supprime l'erreur et on passe en pending
            draft.error = null
            draft.status = 'pending'
            return
        }
        // si le statut est resolved
        if (draft.status === 'resolved') {
            // on passe en updating (requête en cours mais des données sont déjà présentent)
            draft.status = 'updating'
            return
        }
        // sinon l'action est ignorée
        return
        })
        // si l'action est de type Resolved
        .addCase(lodgesResolved, (draft, action) => {
        // si la requête est en cours
        if (draft.status === 'pending' || draft.status === 'updating') {
            // on passe en resolved et on sauvegarde les données
            draft.data = action.payload
            draft.status = 'resolved'
            return
        }
        // sinon l'action est ignorée
        return
        })
        // si l'action est de type Rejected
        .addCase(lodgesRejected, (draft, action) => {
        // si la requête est en cours
        if (draft.status === 'pending' || draft.status === 'updating') {
            // on passe en rejected, on sauvegarde l'erreur et on supprime les données
            draft.status = 'rejected'
            draft.error = action.payload
            draft.data = null
            return
        }
        // sinon l'action est ignorée
        return
        })
)

//Action Asynchrone pour call API
export async function fetchOrUpdateLodges(store) {
    const status = selectLodges(store.getState()).status
    if (status === 'pending' || status === 'updating') {
        return
    }
    store.dispatch(lodgesFetching())
    try {
        const response = await axios.get('/api/lodge')
        store.dispatch(lodgesResolved(response.data))
    } catch (error) {
        store.dispatch(lodgesRejected(error))
    }
}