import { configureStore } from '@reduxjs/toolkit'
import lodgesReducer from '../Features/lodges'
import lodgeReducer from '../Features/lodge'
import aboutReducer from '../Features/about'

export default configureStore({
  reducer: {
    lodges: lodgesReducer,
    lodge: lodgeReducer,
    about: aboutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})