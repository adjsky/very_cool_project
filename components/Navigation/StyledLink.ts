import styled from "styled-components"

type StyledLinkProps = {
  active?: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  width: 100%;
  display: block;
  color: ${(props) => props.active ? "#ffffff" : "#a2a7b1"};
  text-decoration: none;
  font-size: 0.62rem;
  padding: 13px 0px 13px 62px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffffff;
  }
`

export default StyledLink
