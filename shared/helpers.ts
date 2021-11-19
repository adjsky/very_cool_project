import type { NextRouter } from "next/router"

export const routeMatches = (router: NextRouter, routeToMatch: string): boolean => {
  const asPathWithoutQuery = router.asPath.split("?")[0]
  const matches = routeToMatch == asPathWithoutQuery || routeToMatch == router.pathname
  return matches
}