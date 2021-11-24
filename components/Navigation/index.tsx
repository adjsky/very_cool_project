import React from "react"
import styled from "styled-components"
import ActiveLink from "@/shared/ActiveLink"
import { useAppSelector } from "@/src/redux/hooks"
import {
  MdMonitor,
  MdOutlineViewQuilt,
  MdOutlineShowChart,
  MdOutlineMap,
  MdTableView,
  MdDocumentScanner,
  MdCalendarToday,
  MdEmail,
  MdOutlineWallpaper
} from "react-icons/md"
import Container from "./Container"
import NavList from "./NavList"
import StyledLink from "./StyledLink"
import Group from "./Group"
import BlockTitle from "./BlockTitle"
import {
  uiElementsRoutes,
  dashboardRoutes,
  chartsRoutes,
  mapsRoutes,
  tablesRoutes,
  formsRoutes,
  headersRoutes,
  pagesRoutes,
  inboxRoutes
} from "@/src/routes"

const LinkAsTitle = styled(StyledLink)`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.7rem;
  letter-spacing: 1px;
  padding: 15px 30px;

  svg {
    font-size: 0.9rem;
  }
`

const NewLinkAsTitle = styled(LinkAsTitle)`
  &:after {
    content: "NEW";
    color: #ffffff;
    background-color: #0c666a;
    padding: 2px 5px;
    font-size: 0.7rem;
    letter-spacing: 0px;
  }
`

function Navigation() {
  const navOpen = useAppSelector((store) => store.ui.navigationOpen)

  return (
    <Container open={navOpen}>
      <NavList>
        <li>
          <Group
            icon={<MdMonitor />}
            title="DASHBOARDS"
            routes={dashboardRoutes}
          />
        </li>
      </NavList>
      <BlockTitle>FEATURES</BlockTitle>
      <NavList>
        <li>
          <Group
            icon={<MdOutlineViewQuilt />}
            title="UI ELEMENTS"
            routes={uiElementsRoutes}
            bigTitle
          />
        </li>
        <li>
          <Group
            icon={<MdOutlineShowChart />}
            title="CHARTS"
            routes={chartsRoutes}
            bigTitle
          />
        </li>
        <li>
          <Group
            icon={<MdOutlineMap />}
            title="MAPS"
            routes={mapsRoutes}
            bigTitle
          />
        </li>
        <li>
          <Group
            icon={<MdTableView />}
            title="TABLES"
            routes={tablesRoutes}
            bigTitle
          />
        </li>
        <li>
          <Group
            icon={<MdDocumentScanner />}
            title="FORMS"
            routes={formsRoutes}
            bigTitle
          />
        </li>
        <li>
          <ActiveLink href="/calendar" passHref>
            <NewLinkAsTitle>
              <MdCalendarToday />
              CALENDAR
            </NewLinkAsTitle>
          </ActiveLink>
        </li>
      </NavList>
      <BlockTitle>LAYOUTS</BlockTitle>
      <NavList>
        <li>
          <Group
            icon={<MdEmail />}
            title="HEADERS"
            routes={headersRoutes}
            bigTitle
          />
        </li>
        <li>
          <Group
            icon={<MdOutlineWallpaper />}
            title="PAGES"
            routes={pagesRoutes}
            bigTitle
          />
        </li>
        <li>
          <Group
            icon={<MdEmail />}
            title="INBOX"
            routes={inboxRoutes}
            bigTitle
          />
        </li>
      </NavList>
    </Container>
  )
}

export default Navigation
