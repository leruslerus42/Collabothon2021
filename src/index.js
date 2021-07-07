import React from 'react'
import ReactDOM from 'react-dom'
import 'flexboxgrid/css/flexboxgrid.min.css'
import Routes from './Routes'

import { ThemeProvider } from 'styled-components'
import theme from './themes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
