import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

const theme = {}

const GlobalStyles = createGlobalStyle`
  body {
    background: whitesmoke;
  }
`

const LayoutStyled = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutStyled>
  )
}

export default Layout
