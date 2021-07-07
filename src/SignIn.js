import React from 'react'
import { withAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'

const App = () => <AmplifySignIn />

export default withAuthenticator(App)
