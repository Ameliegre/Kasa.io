import { configureStore } from '@reduxjs/toolkit'
import lodgesReducer from '../Features/lodges'
import lodgeReducer from '../Features/lodge'

export default configureStore({
  reducer: {
    lodges: lodgesReducer,
    lodge: lodgeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})