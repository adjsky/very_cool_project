import React, { useContext } from "react"
import styled from "styled-components"
import StoreContext from "@/src/store"

const Wrapper = styled.header`
  position: fixed;  
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.primary.main};
  color: ${(props) => props.theme.primary.contrastText};
`

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
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
    <Wrapper>
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
    </Wrapper>
  )
}

export default Header
