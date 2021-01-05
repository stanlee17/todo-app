import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const todos = useSelector((state) => state.todos)

  // Date format
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }
  const today = new Date()

  return (
    <div className="header flex flex-jc-sb flex-ai-c">
      <div className="header__info">
        <h3>{today.toLocaleDateString('en-US', options)}</h3>
        <p>{todos.length ? todos.length : 'No'} active tasks</p>
      </div>
      <div className="header__filter">
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
    </div>
  )
}

export default Header
