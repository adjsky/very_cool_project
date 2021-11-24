import React, { useEffect } from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import type { AppProps } from "next/app"
import { lightTheme, darkTheme } from "@/src/theme"
import { useRouter } from "next/router"
import { Provider } from "react-redux"
import store, { AppDispatch } from "@/src/redux/store"
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks"
import {
  setUpdateFound,
  openNavigation,
  changeTheme,
  showLoading
} from "@/src/redux/uiSlice"
import type { Theme } from "@/src/redux/uiSlice"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"
import dynamic from "next/dynamic"
import "@/styles/globals.css"

const LoadingBar = dynamic(() => import("@/components/LoadIndicator/bar"), {
  ssr: false
})

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
      dispatch(showLoading(true))
    }

    const handleRouteComplete = () => {
      console.log("[App] Route change complete")
      dispatch(showLoading(false))
    }

    const handleRouteError = () => {
      console.log("[App] Route change error")
      dispatch(showLoading(false))
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
      </Head>
      <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
        <Header />
        <Navigation />
        <Component {...pageProps} />
        <LoadingBar />
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
