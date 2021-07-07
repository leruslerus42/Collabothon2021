import React from 'react'
import ReactDOM from 'react-dom'
import 'flexboxgrid/css/flexboxgrid.min.css'
import App from './routes/app/App'

import { ThemeProvider } from 'styled-components'
import theme from './themes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
