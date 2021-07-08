import React from 'react'
import styled from 'styled-components'
import BarCode from './BarCode'
import GlobalStyles from './globalStyles'
import Page from '../../components/Page'
import Points from './Points'
import LastEarnedPoints from './LastEarnedPoints'
import Header from '../../components/Header'
// import Fetch from './Fetch'

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const App = () => (
  <div>
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
  </div>
)

export default App
