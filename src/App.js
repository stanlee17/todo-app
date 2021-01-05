import React, { useState } from 'react'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import './scss/style.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoInput />
    </div>
  )
}

export default App
