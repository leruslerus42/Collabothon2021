import React from 'react'
import { withAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react'

const App = () => <AmplifySignUp />

export default withAuthenticator(App)
