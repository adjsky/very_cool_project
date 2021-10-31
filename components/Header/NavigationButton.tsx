import React, { useContext } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import StoreContext from "@/src/store"

type ButtonProps = {
  navOpen: boolean
  forMobile: boolean
}

const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0;

  @media only screen and (max-width: 480px) {
    display: ${(props) => (props.forMobile ? "flex" : "none")};
  }

  @media only screen and (min-width: 481px) {
    display: ${(props) => (props.forMobile ? "none" : "flex")};
  }
`

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  background-color: #fff;
`

type NavigationButtonProps = {
  forMobile: boolean
}

function NavigationButton({ forMobile }: NavigationButtonProps): JSX.Element {
  const { uiState } = useContext(StoreContext)

  return (
    <Button
      type="button"
      onClick={() => {
        uiState.setNavigationOpen(!uiState.navigationOpen)
      }}
      navOpen={uiState.navigationOpen}
      forMobile={forMobile}
    >
      <Bar />
      <Bar />
      <Bar />
    </Button>
  )
}

export default NavigationButton
