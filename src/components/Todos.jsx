import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todos = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  console.log(todos)

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
          <input
            type="checkbox"
            checked={todos.isCompleted}
            onClick={() => handleClick(todo)}
          />
          <span className={todo.isCompleted ? 'todo-completed' : null}>
            {todo.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Todos
