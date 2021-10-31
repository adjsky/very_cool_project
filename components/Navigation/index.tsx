import React, { useContext } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import StoreContext from "@/src/store"

type ContainerProps = {
  open: boolean
}

const Container = styled.div<ContainerProps>`
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
  transition: transform 0.3s linear;
`

function Navigation(): JSX.Element {
  const { uiState } = useContext(StoreContext)

  return <Container open={uiState.navigationOpen}>Navigation</Container>
}

export default observer(Navigation)
