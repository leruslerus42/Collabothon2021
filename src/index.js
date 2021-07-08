import React from 'react'
import ReactDOM from 'react-dom'
import 'flexboxgrid/css/flexboxgrid.min.css'
import Routes from './Routes'
// import UserProvider from './providers/UserProvider'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'

import { ThemeProvider } from 'styled-components'
import theme from './themes'

ReactDOM.render(
  <React.StrictMode>
    <AmplifyAuthenticator>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AmplifyAuthenticator>
  </React.StrictMode>,
  document.getElementById('root')
)
