import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import inprogress from '../images/inprogress.svg'
import completed from '../images/completed.svg'

const Active = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleToggleClick = (todo) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: todo,
    })
  }

  const isActive = todos.map(
    (todo) =>
      todo.isActive && (
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
      ),
  )

  return <div className="todos">{isActive}</div>
}

export default Active
