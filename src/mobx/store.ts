import { createContext } from "react"
import { makeAutoObservable } from "mobx"
import { enableStaticRendering } from "mobx-react-lite"

export interface Store {
  uiState: UiState
}

export type Theme = "light" | "dark"

export const isBrowser = typeof window != "undefined"

export class UiState {
  public theme: Theme = "light"
  public updateFound: boolean = false
  public navigationOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setTheme(theme: Theme) {
    this.theme = theme
  }

  setUpdateFound(update: boolean) {
    this.updateFound = update
  }

  setNavigationOpen(open: boolean) {
    this.navigationOpen = open
  }
}

enableStaticRendering(!isBrowser)

export default createContext<Store>({
  uiState: new UiState()
})
