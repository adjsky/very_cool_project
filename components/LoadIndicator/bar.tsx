import React, { useEffect, useState } from "react"
import { useAppSelector } from "@/src/redux/hooks"
import styled from "styled-components"

const tickOffset = 50
const waitDuration = 100

const StyledBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2eb7f3;
  transition: transform 0.3s linear;
`

function Bar() {
  const [barPosition, setBarPosition] = useState<number>(-1 * window.innerWidth)
  const [hidden, setHidden] = useState<boolean>(true)
  const loading = useAppSelector((state) => state.ui.showLoading)

  useEffect(() => {
    if (loading) {
      setHidden(false)
      const interval = setInterval(() => {
        setBarPosition((barPosition) => barPosition + tickOffset)
      }, waitDuration)

      return () => {
        clearInterval(interval)
        setBarPosition(0)

        setTimeout(() => {
          setHidden(true)
          setBarPosition(-1 * window.innerWidth)
        }, waitDuration * 4)
      }
    }
  }, [loading])

  if (hidden) {
    return null
  }

  return <StyledBar style={{ transform: `translateX(${barPosition}px)` }} />
}

export default Bar
