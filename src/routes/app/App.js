import React from 'react'
import { ThemeProvider } from 'styled-components'
import QRCode from 'react-qr-code'
import theme from '../../themes'
import GlobalStyles from './globalStyles'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <header className="App-header">Hello</header>
    <QRCode value={123} size={300} />
  </ThemeProvider>
)

export default App
