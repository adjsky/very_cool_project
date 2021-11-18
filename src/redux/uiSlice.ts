import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Theme = "light" | "dark"

export type UiState = {
  theme: Theme
  updateFound: boolean
  navigationOpen: boolean
}

const initialState: UiState = {
  theme: "light",
  updateFound: false,
  navigationOpen: false
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload
    },
    openNavigation: (state, action: PayloadAction<boolean>) => {
      state.navigationOpen = action.payload
    },
    setUpdateFound: (state, action: PayloadAction<boolean>) => {
      state.updateFound = action.payload
    }
  }
})

export const { changeTheme, openNavigation, setUpdateFound } = uiSlice.actions

export default uiSlice.reducer
