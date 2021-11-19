import React, { useEffect } from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import type { AppProps } from "next/app"
import { lightTheme, darkTheme } from "@/src/theme"
import styled from "styled-components"
import { useRouter } from "next/router"
import { Provider } from "react-redux"
import store, { AppDispatch } from "@/src/redux/store"
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks"
import {
  setUpdateFound,
  openNavigation,
  changeTheme
} from "@/src/redux/uiSlice"
import type { Theme } from "@/src/redux/uiSlice"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import "@/styles/globals.css"

type ContainerProps = {
  navOpen: boolean
}

const Container = styled.div<ContainerProps>`
  margin-top: var(--header-height);
  margin-left: ${(props) => (props.navOpen ? "var(--nav-width)" : "0px")};
  transition: margin-left 0.3s ease-in-out;
`

type AdaptiveContainerProps = {
  children: JSX.Element
}

const AdaptiveContainer = ({ children }: AdaptiveContainerProps) => {
  const navOpen = useAppSelector((store) => store.ui.navigationOpen)

  return <Container navOpen={navOpen}>{children}</Container>
}

const initializeSW = (dispatch: AppDispatch) => {
  if ("serviceWorker" in navigator && process.env.NEXT_PUBLIC_IS_PROD) {
    navigator.serviceWorker.register("/sw.js").then((reg) => {
      reg.onupdatefound = async () => {
        console.log("[Service Worker] Update found")
        if (reg.installing && reg.active) {
          dispatch(setUpdateFound(true))
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

const checkTheme = (dispatch: AppDispatch) => {
  const theme = window.localStorage.getItem("theme")
  if (theme) {
    dispatch(changeTheme(theme as Theme))
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((store) => store.ui.theme)
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
      dispatch(openNavigation(true))
    }

    window.onload = () => {
      console.log("[App] Page loaded")
    }

    initializeSW(dispatch)
    checkTheme(dispatch)

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
          content={theme == "light" ? "#FFFFFF" : "#000000"}
        />
      </Head>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <Header />
        <Navigation />
        <AdaptiveContainer>
          <Component {...pageProps} />
        </AdaptiveContainer>
      </ThemeProvider>
    </>
  )
}

function Wrapper(props: AppProps) {
  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  )
}

export default Wrapper
