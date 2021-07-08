import React from 'react'
import styled from 'styled-components'
import BarCode from './BarCode'
import GlobalStyles from './globalStyles'
import Page from '../components/Page'
import Points from './Points'
import LastEarnedPoints from './LastEarnedPoints'
import Header from './Header'
// import Fetch from './Fetch'
import Amplify from 'aws-amplify'
import awsconfig from '../../aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)

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
      <AmplifySignOut />
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

export default withAuthenticator(App)
