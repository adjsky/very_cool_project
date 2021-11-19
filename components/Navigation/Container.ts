import styled from "styled-components"

type ContainerProps = {
  open: boolean
}

const Container = styled.nav<ContainerProps>`
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
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export default Container
