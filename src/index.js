import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/reset.css'
import './styles/styles.css'
import Container from './components/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

const domNode = document.getElementById('root')
const root = createRoot(domNode)


root.render(
  <>
  <App />
  <Container />
  </>
)
