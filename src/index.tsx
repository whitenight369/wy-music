import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom'
import '@/assets/css/index.less'
import App from '@/App'

// const obj = {}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
