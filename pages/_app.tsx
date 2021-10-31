import React, { useContext, useEffect } from "react"
import Head from "next/head"
import { observer } from "mobx-react-lite"
import { ThemeProvider } from "styled-components"
import type { AppProps } from "next/app"
import StoreContext, { UiState } from "@/src/store"
import { lightTheme, darkTheme } from "@/src/theme"
import styled from "styled-components"
import { useRouter } from "next/router"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import "@/styles/globals.css"

type ContainerProps = {
  navOpen: boolean
}

const Container = styled.div<ContainerProps>`
  margin-top: var(--header-height);
  margin-left: ${(props) => (props.navOpen ? "var(--nav-width)" : "0px")};
  transition: margin-left 0.3s linear;
`

const initializeSW = (uiState: UiState) => {
  if ("serviceWorker" in navigator && process.env.NEXT_PUBLIC_IS_PROD) {
    navigator.serviceWorker.register("/sw.js").then((reg) => {
      reg.onupdatefound = async () => {
        console.log("[Service Worker] Update found")
        if (reg.installing && reg.active) {
          uiState.setUpdateFound(true)
          const result = window.confirm("Update is available, update?")
          if (result) {
            await reg.unregister()
            window.location.reload()
          }
        }
      }
    })
  }
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { uiState } = useContext(StoreContext)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("[App] Route change")
    }

    const handleRouteComplete = () => {
      console.log("[App] Route change complete")
    }

    const handleRouteError = () => {
      console.log("[App] Route change error")
    }

    if (window.innerWidth > 480) {
      uiState.setNavigationOpen(true)
    }

    window.onload = () => {
      console.log("[App] Page loaded")
    }

    initializeSW(uiState)

    router.events.on("routeChangeStart", handleRouteChange)
    router.events.on("routeChangeComplete", handleRouteComplete)
    router.events.on("routeChangeError", handleRouteError)

    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
      router.events.off("routeChangeComplete", handleRouteComplete)
      router.events.off("routeChangeError", handleRouteError)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Very Cool Project</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="theme-color"
          content={uiState.theme == "light" ? "#FFFFFF" : "#000000"}
        />
      </Head>
      <ThemeProvider theme={uiState.theme == "light" ? lightTheme : darkTheme}>
        <Header />
        <Navigation />
        <Container navOpen={uiState.navigationOpen}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default observer(MyApp)
