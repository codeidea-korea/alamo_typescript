import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'

import colorSchemeReducer from './colorSchemeSlice'
import darkModeReducer from './darkModeSlice'
import sideMenuReducer from './sideMenuSlice'

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
