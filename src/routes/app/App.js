import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import BarCode from './BarCode'
import theme from '../../themes'
import GlobalStyles from './globalStyles'
import Page from '../components/Page'
import Points from './Points'

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  background-color: yellowgreen;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Page>
      <GlobalStyles />
      {/* <Fetch /> */}
      <TopWrapper>
        <Points value={1040} />
        <BarCode value={123456789} size={300} />
      </TopWrapper>
    </Page>
  </ThemeProvider>
)

export default App
