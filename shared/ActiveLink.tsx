import React from "react"
import Link from "next/link"
import type { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { routeMatches } from "@/shared/helpers"

type ActiveLinkProps = LinkProps & {
  children: JSX.Element
}

function ActiveLink(props: ActiveLinkProps) {
  const router = useRouter()
  const { href } = props
  const isHrefObject = typeof href != "string"
  const hrefString = isHrefObject ? (href.pathname ? href.pathname : "") : href
  const active = routeMatches(router, hrefString)

  return (
    <Link {...props}>{React.cloneElement(props.children, { active })}</Link>
  )
}

export default ActiveLink
