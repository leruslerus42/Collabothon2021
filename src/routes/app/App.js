import React from 'react'
import { ThemeProvider } from 'styled-components'
import QRCode from './BarCode'
import theme from '../../themes'
import GlobalStyles from './globalStyles'
import Page from '../components/Page'
import Fetch from './Fetch'

const App = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <GlobalStyles />
      <Fetch />
      <QRCode value={123} size={300} />
    </Page>
  </ThemeProvider>
)

export default App
