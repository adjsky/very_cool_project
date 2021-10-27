import React, { useContext } from "react"
import styled from "styled-components"
import StoreContext from "../src/store"

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.primary.contrastText};
  background-color: ${(props) => props.theme.primary.main};
  border: none;
  outline: none;
  cursor: pointer;
`

function Home(): JSX.Element {
  const { uiState } = useContext(StoreContext)

  return (
    <Button
      onClick={() => {
        uiState.setTheme(uiState.theme == "light" ? "dark" : "light")
      }}
    >
      Change theme v6
    </Button>
  )
}

export default Home
