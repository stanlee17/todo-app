import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uuid } from 'uuidv4'

const TodoInput = () => {
  const id = uuid()
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  const handleChange = (e) => setNewTodo(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      payload: {
        label: newTodo,
        isCompleted: false,
        isActive: true,
        id,
      },
    })
    setNewTodo('')
  }

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Enter a task..."
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  )
}

export default TodoInput
