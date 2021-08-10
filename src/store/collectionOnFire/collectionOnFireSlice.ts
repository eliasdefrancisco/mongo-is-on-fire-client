import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _set from 'lodash.set'
import { socketEvents } from '../../enums/sockets'


type socketEventType = { [key in socketEvents]: any }

export interface CollectionOnFireState {
    documents: Array<socketEventType>
}

const initialState: CollectionOnFireState = {
    documents: []
}

export const collectionOnFireSlice = createSlice({
    name: 'collectionOnFire',
    initialState,
    reducers: {
        [socketEvents.collectionComplete]: (state, action: PayloadAction<Array<socketEventType>>) => {
            state.documents = action.payload
        },
        [socketEvents.deleteDocument]: (state, action: PayloadAction<{ deletedIndex: number }>) => {
            state.documents.splice(action.payload.deletedIndex, 1)
        },
        [socketEvents.insertDocument]: (state, action: PayloadAction<socketEventType>) => {
            state.documents.push(action.payload)
        },
        [socketEvents.replaceDocument]: (state, action: PayloadAction<{ replacedIndex: number, fullDocument: socketEventType }>) => {
            state.documents[action.payload.replacedIndex] = action.payload.fullDocument
        },
        [socketEvents.removeField]: (state, action: PayloadAction<{ updatedIndex: number, removedField: socketEvents }>) => {
            delete state.documents[action.payload.updatedIndex][action.payload.removedField]
        },
        [socketEvents.truncateArrayField]: (state, action: PayloadAction<{ updatedIndex: number, truncatedArray: { field: socketEvents, newSize: number } }>) => {
            state.documents[action.payload.updatedIndex][action.payload.truncatedArray.field].length = action.payload.truncatedArray.newSize
        },
        [socketEvents.updateField]: (state, action: PayloadAction<{ updatedIndex: number, updatedKey: string, updatedValue: any }>) => {
            _set(state.documents[action.payload.updatedIndex], action.payload.updatedKey, action.payload.updatedValue)
        },
        [socketEvents.welcome]: () => { },
    }
})

export const { collectionComplete, deleteDocument, insertDocument, replaceDocument, removeField, truncateArrayField, updateField, welcome } = collectionOnFireSlice.actions

export default collectionOnFireSlice.reducer