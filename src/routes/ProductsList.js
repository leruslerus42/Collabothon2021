import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'

import Header from '../components/Header'
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
      <div>Product</div>
    </Page>
  </div>
)

export default App
