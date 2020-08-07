import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { $Layout } from "../styles/"

const theme = {}

const GlobalStyles = createGlobalStyle`
  body {
    background: whitesmoke;
  }

  form {
    margin: 0;
  }
`

const Layout = ({ children }) => {
  return (
    <$Layout>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </$Layout>
  )
}

export default Layout
