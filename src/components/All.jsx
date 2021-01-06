import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import inprogress from '../images/inprogress.svg'
import completed from '../images/completed.svg'

const All = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleToggleClick = (todo) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: todo,
    })
  }
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todos__task flex flex-jc-sb" key={todo.id}>
          <span className={todo.isCompleted ? 'todo-completed' : null}>
            {todo.label}
          </span>
          <img
            src={todo.isCompleted ? completed : inprogress}
            className="inprogress"
            alt="inprogress"
            onClick={() => handleToggleClick(todo)}
          />
        </div>
      ))}
    </div>
  )
}

export default All
