import React from 'react'
import { withAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react'
import Header from '../components/Header'

const App = () => (
  <div>
    <Header />
    <AmplifySignUp />
  </div>
)

export default withAuthenticator(App)
