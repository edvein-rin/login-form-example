import process from 'process'
import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from 'reportWebVitals'

import App from 'components/App'

import 'normalize.css'
import 'modern-css-reset'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

if (process?.env?.NODE_ENV === 'development') {
  reportWebVitals(console.log)
}
