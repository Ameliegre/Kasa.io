import { configureStore } from '@reduxjs/toolkit'
import lodgesReducer from '../Features/lodges'

export default configureStore({
  reducer: {
    lodges: lodgesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})