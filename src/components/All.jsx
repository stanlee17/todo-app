import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const All = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleClick = (todo) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: todo,
    })
  }
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todos__task" key={todo.id}>
          <span
            className={todo.isCompleted ? 'todo-completed' : null}
            onClick={() => handleClick(todo)}
          >
            {todo.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default All
