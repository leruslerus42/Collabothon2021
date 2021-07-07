import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../../themes'
import GlobalStyles from './globalStyles'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <header className="App-header">Hello</header>
  </ThemeProvider>
)

export default App
