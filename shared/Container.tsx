import React from "react"
import styled from "styled-components"
import { useAppSelector } from "@/src/redux/hooks"

type ContainerProps = {
  navOpen: boolean
}

const Container = styled.main<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background-color: ${(props) => props.theme.pageBackground};
  color: #a5a5a5;
  margin-top: var(--header-height);
  padding-left: ${(props) => (props.navOpen ? "var(--nav-width)" : "0px")};
  transition: padding-left 0.3s ease-in-out;
`

type AdaptiveContainerProps = {
  children: React.ReactNode
}

function AdaptiveContainer({ children }: AdaptiveContainerProps) {
  const navOpen = useAppSelector((store) => store.ui.navigationOpen)

  return <Container navOpen={navOpen}>{children}</Container>
}

export default AdaptiveContainer
