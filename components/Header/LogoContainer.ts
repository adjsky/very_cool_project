import styled from "styled-components"

const LogoContainer = styled.div`
  display: flex;
  width: var(--nav-width);
  height: var(--header-height);
  align-items: center;
  justify-content: center;
  background-color: #1f232b;

  @media only screen and (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
    padding: 0 30px;
  }
`

export default LogoContainer
