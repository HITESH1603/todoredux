import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/addtodos'
import TodoRemove from './components/removetodos'
import { store } from './stores/store'
function App() {
 
  return (
    <>
    <h1>Learning Redux Toolkit</h1>
     <AddTodo /> 
    < TodoRemove/>
    </>
  )
}

export default App
