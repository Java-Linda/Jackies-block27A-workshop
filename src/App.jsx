import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import PermanentDrawerLeft from './components/Sidebar'
import Transaction from './components/Transaction'

function App() {


  return (
    <>
      <Dashboard />
      <PermanentDrawerLeft />
      <Transaction />
    </>
  )
}

export default App

