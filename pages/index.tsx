import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: var(--header-height);
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.primary.light};
`

function Home(): JSX.Element {
  return (
    <Container>
    </Container>
  )
}

export default Home
