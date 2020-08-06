import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import { styleReset } from "react95"
import original from "react95/dist/themes/original"
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2"
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2"

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  ${styleReset}

  body {
    background: teal;
    font-family: 'ms_sans_serif';
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
      <ThemeProvider theme={original}>{children}</ThemeProvider>
    </LayoutStyled>
  )
}

export default Layout
