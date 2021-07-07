import React from 'react'
import { ThemeProvider } from 'styled-components'
import QRCode from './GRCode'
import theme from '../../themes'
import GlobalStyles from './globalStyles'
import Page from './components/Page'

const App = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <GlobalStyles />
      <QRCode value={123} size={300} />
    </Page>
  </ThemeProvider>
)

export default App
