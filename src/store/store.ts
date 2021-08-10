import { configureStore } from '@reduxjs/toolkit';
import collectionOnFireReducer from './collectionOnFire/collectionOnFireSlice'

export const store = configureStore({
    reducer: {
        collectionOnFire: collectionOnFireReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch