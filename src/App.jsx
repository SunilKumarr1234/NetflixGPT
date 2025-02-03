import React from 'react'
import Body from './components/Body'
import Login from './components/Login'
import Header from './components/Header'
import { Provider } from 'react-redux'
import appStore from './utils/Appstore'

const App = () => {
  return (
    <div>
      <Provider store={appStore}><Body /></Provider> 
    </div>
  )
}

export default App
