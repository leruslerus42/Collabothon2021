import React from 'react'
import { ThemeProvider } from 'styled-components'
import BarCode from './BarCode'
import theme from '../../themes'
import GlobalStyles from './globalStyles'
import Page from '../components/Page'
import Fetch from './Fetch'

const App = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <GlobalStyles />
      {/* <Fetch /> */}
      <BarCode value={123456789} size={300} />
    </Page>
  </ThemeProvider>
)

export default App
