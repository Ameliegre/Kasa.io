import { configureStore } from '@reduxjs/toolkit'
import lodgesReducer from '../Features/lodges'
import lodgeReducer from '../Features/lodge'
import aboutReducer from '../Features/about'
import hostReducer from '../Features/host'

export default configureStore({
  reducer: {
    lodges: lodgesReducer,
    lodge: lodgeReducer,
    about: aboutReducer,
    host: hostReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})