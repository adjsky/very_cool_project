import React, { useContext, useEffect } from "react"
import Head from "next/head"
import { observer } from "mobx-react-lite"
import { ThemeProvider } from "styled-components"
import type { AppProps } from "next/app"
import StoreContext from "../src/store"
import { lightTheme, darkTheme } from "../src/theme"
import "@/styles/globals.css"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { uiState } = useContext(StoreContext)

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js")
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <ThemeProvider theme={uiState.theme == "light" ? lightTheme : darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default observer(MyApp)
