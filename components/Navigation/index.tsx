import React from "react"
import styled from "styled-components"
import { useAppSelector } from "@/src/redux/hooks"

type ContainerProps = {
  open: boolean
}

const Container = styled.nav<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--nav-width);
  height: calc(100vh - var(--header-height));
  position: fixed;
  top: var(--header-height);
  left: 0;
  background-color: #1f232b;
  color: #fff;
  border-top: 1px solid #333;
  overflow: hidden;
  transform: translateX(
    ${(props) => (props.open ? "0px" : "calc(-1 * var(--nav-width))")}
  );
  transition: transform 0.3s ease-in-out;
`

function Navigation(): JSX.Element {
  const navOpen = useAppSelector((store) => store.ui.navigationOpen)

  return <Container open={navOpen}>Navigation</Container>
}

export default Navigation
