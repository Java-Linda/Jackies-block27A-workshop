import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import PermanentDrawerLeft from './components/Sidebar'

function App() {


  return (
    <>
      <Dashboard />
      <PermanentDrawerLeft />
    </>
  )
}

export default App

