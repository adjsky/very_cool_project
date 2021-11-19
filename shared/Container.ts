import styled from "styled-components"

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - var(--header-height));
  background-color: ${(props) => props.theme.pageBackground};
  color: #a5a5a5;
`

export default Container