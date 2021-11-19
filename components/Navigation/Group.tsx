import React, { useState, useEffect } from "react"
import GroupTitle from "./GroupTitle"
import NestedNavList from "./NestedNavList"
import StyledLink from "./StyledLink"
import ActiveLink from "@/shared/ActiveLink"
import { useRouter } from "next/router"
import { routeMatches } from "@/shared/helpers"
import type { Route } from "@/src/routes"

type GroupProps = {
  icon: JSX.Element
  title: string
  bigTitle?: boolean
  routes: Route[]
}

function Group({ icon, title, bigTitle, routes }: GroupProps) {
  const [active, setActive] = useState<boolean>(false)
  const [hasActiveLink, setActiveLink] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    for (const route of routes) {
      if (routeMatches(router, route.href)) {
        setActiveLink(true)
        break
      }
    }
  }, [])

  return (
    <>
      <GroupTitle
        big={bigTitle}
        active={active}
        hasActiveLink={hasActiveLink}
        onClick={() => {
          setActive(!active)
        }}
      >
        {icon}
        {title}
      </GroupTitle>
      <NestedNavList>
        {routes.map((route) => (
          <li key={route.title}>
            <ActiveLink
              href={route.href}
              passHref
            >
              <StyledLink>
                {route.title}
              </StyledLink>
            </ActiveLink>
          </li>
        ))}
      </NestedNavList>
    </>
  )
}

export default Group
