import React from "react"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks"
import { changeTheme } from "@/src/redux/uiSlice"
import { MdOutlineNightsStay, MdOutlineWbSunny } from "react-icons/md"

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
`

function ThemeButton() {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((store) => store.ui.theme)

  return (
    <Button
      onClick={() => {
        dispatch(changeTheme(theme == "light" ? "dark" : "light"))
      }}
    >
      {theme == "light" ? <MdOutlineNightsStay /> : <MdOutlineWbSunny />}
    </Button>
  )
}

export default ThemeButton
