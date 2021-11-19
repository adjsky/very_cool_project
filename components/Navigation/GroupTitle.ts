import styled from "styled-components"

type GroupTitleProps = {
  big?: boolean
  active?: boolean
  hasActiveLink?: boolean
}

const GroupTitle = styled.button<GroupTitleProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  color: ${(props) =>
    props.active || props.hasActiveLink ? "#ffffff" : "#a2a7b1"};
  transition: color 0.3s ease-in-out;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding: ${(props) => (props.big ? "15px" : "10px")} 30px;

  &:hover {
    color: #ffffff;
  }

  &:hover::after,
  &:hover::before {
    background-color: #ffffff;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    right: 40px;
    width: 10px;
    height: 2px;
    background-color: ${(props) => (props.active ? "#ffffff" : "#a2a7b1")};
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &::after {
    transform: rotate(${(props) => (props.active ? "45" : "0")}deg);
  }

  &::before {
    transform: rotate(${(props) => (props.active ? "135" : "90")}deg);
  }

  & + ul {
    display: ${(props) => (props.active ? "block" : "none")};
  }

  svg {
    font-size: 0.9rem;
  }
`

export default GroupTitle
