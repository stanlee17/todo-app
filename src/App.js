import React from 'react'
import Header from './components/Header'
import All from './components/All'
import Active from './components/Active'
import Completed from './components/Completed'
import TodoInput from './components/TodoInput'
import { Route, Switch } from 'react-router-dom'
import './scss/style.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoInput />
      <Switch>
        <Route exact path="/">
          <All />
        </Route>
        <Route path="/active">
          <Active />
        </Route>
        <Route path="/completed">
          <Completed />
        </Route>
      </Switch>
    </div>
  )
}

export default App
