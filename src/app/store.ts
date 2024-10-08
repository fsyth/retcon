import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import characterBuilderReducer from '../features/character-builder/characterBuilderSlice'

export const store = configureStore({
  reducer: {
    characterBuilder: characterBuilderReducer,
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
