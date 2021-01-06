import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Completed = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  console.log(todos)

  const handleClick = (todo) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: todo,
    })
  }
  return todos.map(
    (todo) =>
      todo.isCompleted && (
        <div className="todos__task" key={todo.id}>
          <span
            className={todo.isCompleted ? 'todo-completed' : null}
            onClick={() => handleClick(todo)}
          >
            {todo.label}
          </span>
        </div>
      ),
  )
}

export default Completed
