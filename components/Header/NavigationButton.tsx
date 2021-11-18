import React from "react"
import { useAppSelector, useAppDispatch } from "@/src/redux/hooks"
import { openNavigation } from "@/src/redux/uiSlice"
import styled from "styled-components"

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

  span {
    transition: transform 0.3s ease-in-out;
  }

  span:first-child {
    transform: ${(props) =>
      props.navOpen ? "rotate(-45deg) translateX(-2px)" : "none"};
    width: ${(props) => (props.navOpen ? "12px" : "25px")};
  }

  span:last-child {
    transform: ${(props) =>
      props.navOpen ? "rotate(45deg) translateX(-2px)" : "none"};
    width: ${(props) => (props.navOpen ? "12px" : "25px")};
  }

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
  const dispatch = useAppDispatch()
  const navOpen = useAppSelector((store) => store.ui.navigationOpen)

  return (
    <Button
      type="button"
      onClick={() => {
        dispatch(openNavigation(!navOpen))
      }}
      navOpen={navOpen}
      forMobile={forMobile}
    >
      <Bar />
      <Bar />
      <Bar />
    </Button>
  )
}

export default NavigationButton
