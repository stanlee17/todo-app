import React from 'react'
import { useSelector } from 'react-redux'

const Todos = () => {
  const todos = useSelector((state) => state.todos)

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todos__task" key={todo.id}>
          <input type="checkbox" />
          <span>{todo.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Todos
