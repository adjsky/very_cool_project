import React from "react"
import styled from "styled-components"
import Link from "next/link"
import LogoContainer from "./LogoContainer"
import ThemeButton from "./ThemeButton"
import NavigationButton from "./NavigationButton"

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: #3c4452;
  position: fixed;
  top: 0;
  left: 0;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    height: calc(2 * var(--header-height));
  }
`

const ManageWrapper = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  flex: 1 1 auto;
  padding: 0 30px;
  justify-content: space-between;

  button {
    font-size: 1rem;
  }

  @media only screen and (max-width: 480px) {
    justify-content: flex-end;
  }
`

const LogoLink = styled.a`
  color: #fff;
  letter-spacing: 2px;
  font-size: 1.3rem;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
`

function Header(): JSX.Element {
  return (
    <Container>
      <LogoContainer>
        <Link href="/" passHref>
          <LogoLink>Logo</LogoLink>
        </Link>
        <NavigationButton forMobile={true} />
      </LogoContainer>
      <ManageWrapper>
        <NavigationButton forMobile={false} />
        <ThemeButton />
      </ManageWrapper>
    </Container>
  )
}

export default Header
