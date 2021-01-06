import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import inprogress from '../images/inprogress.svg'
import completed from '../images/completed.svg'
import remove from '../images/remove.svg'

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
        <div className="todos__task flex flex-jc-sb" key={todo.id}>
          <span
            className={todo.isCompleted ? 'todo-completed' : null}
            onClick={() => handleClick(todo)}
          >
            {todo.label}
          </span>
          <div>
            <img
              src={todo.isCompleted ? completed : inprogress}
              className="inprogress margin-right-sm"
              alt="inprogress"
              onClick={() => handleClick(todo)}
            />
            <img src={remove} className="remove" alt="remove" />
          </div>
        </div>
      ),
  )
}

export default Completed
