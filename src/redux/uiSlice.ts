import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Theme = "light" | "dark"

export type UiState = {
  theme: Theme
  updateFound: boolean
  navigationOpen: boolean
  showLoading: boolean
}

const initialState: UiState = {
  theme: "light",
  updateFound: false,
  navigationOpen: false,
  showLoading: false
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeTheme: {
      reducer(state, action: PayloadAction<Theme>) {
        state.theme = action.payload
      },
      prepare(theme: Theme) {
        if (theme == "dark") {
          window.localStorage.setItem("theme", theme)
        } else {
          window.localStorage.removeItem("theme")
        }
        return {
          payload: theme
        }
      }
    },
    openNavigation: (state, action: PayloadAction<boolean>) => {
      state.navigationOpen = action.payload
    },
    setUpdateFound: (state, action: PayloadAction<boolean>) => {
      state.updateFound = action.payload
    },
    showLoading: (state, action: PayloadAction<boolean>) => {
      state.showLoading = action.payload
    }
  }
})

export const { changeTheme, openNavigation, setUpdateFound, showLoading } =
  uiSlice.actions

export default uiSlice.reducer
