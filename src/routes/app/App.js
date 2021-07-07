import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import BarCode from './BarCode'
import theme from '../../themes'
import GlobalStyles from './globalStyles'
import Page from '../components/Page'
import Points from './Points'
import LastEarnedPoints from './LastEarnedPoints'
import Header from './Header'
// import Fetch from './Fetch'

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Page>
      <GlobalStyles />
      {/* <Fetch /> */}
      <TopWrapper>
        <Points value={5000} />
        <BarCode value={123456789} size={300} />
      </TopWrapper>
      <LastEarnedPoints />
    </Page>
  </ThemeProvider>
)

export default App
