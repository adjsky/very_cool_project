import React, { useContext } from "react"
import styled from "styled-components"
import StoreContext from "@/src/store"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: var(--header-height);
  background-color: ${(props) => props.theme.primary.main};
  color: ${(props) => props.theme.primary.contrastText};
  top: 0;
  left: 0;
  padding: 0 25px;
`

const Logo = styled.div``

const Navigation = styled.nav``

const ManageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const ThemeButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.primary.light};
  color: ${(props) => props.theme.primary.contrastText};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
`

function Header() {
  const { uiState } = useContext(StoreContext)

  return (
    <Container>
      <Logo>Logo</Logo>
      <ManageWrapper>
        <Navigation>Navigation</Navigation>
        <ThemeButton
          onClick={() => {
            uiState.setTheme(uiState.theme == "light" ? "dark" : "light")
          }}
        >
          Change Theme
        </ThemeButton>
      </ManageWrapper>
    </Container>
  )
}

export default Header
