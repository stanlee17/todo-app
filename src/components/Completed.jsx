import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import inprogress from '../images/inprogress.svg'
import completed from '../images/completed.svg'
import remove from '../images/remove.svg'

const Completed = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  console.log(todos)

  const handleRemoveClick = (todo) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: todo.id,
    })
  }
  return todos.map(
    (todo) =>
      todo.isCompleted && (
        <div className="todos__task flex flex-jc-sb" key={todo.id}>
          <span className={todo.isCompleted ? 'todo-completed' : null}>
            {todo.label}
          </span>
          <div>
            <img
              src={remove}
              className="remove"
              alt="remove"
              onClick={() => handleRemoveClick(todo)}
            />
          </div>
        </div>
      ),
  )
}

export default Completed
