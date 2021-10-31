import React, { useContext } from "react"
import styled from "styled-components"
import StoreContext from "@/src/store"
import { MdOutlineNightsStay, MdOutlineWbSunny } from "react-icons/md"

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
`

function ThemeButton(): JSX.Element {
  const { uiState } = useContext(StoreContext)

  return (
    <Button
      onClick={() => {
        uiState.setTheme(uiState.theme == "light" ? "dark" : "light")
      }}
    >
      {uiState.theme == "light" ? (
        <MdOutlineNightsStay />
      ) : (
        <MdOutlineWbSunny />
      )}
    </Button>
  )
}

export default ThemeButton
