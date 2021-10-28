import { createContext } from "react"
import { makeAutoObservable } from "mobx"
import { enableStaticRendering } from "mobx-react-lite"

interface Store {
  uiState: UiState
}

type Theme = "light" | "dark"

class UiState {
  public theme: Theme = "light"
  public updateFound: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setTheme(theme: Theme) {
    this.theme = theme
  }

  setUpdateFound(update: boolean) {
    this.updateFound = update
  }
}

enableStaticRendering(typeof window == "undefined")

export default createContext<Store>({
  uiState: new UiState()
})
