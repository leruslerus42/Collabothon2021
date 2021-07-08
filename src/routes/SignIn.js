import React from 'react'
import { withAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import Header from '../components/Header'

const App = () => (
  <>
    <Header />
    <AmplifySignIn />
  </>
)

export default withAuthenticator(App)
