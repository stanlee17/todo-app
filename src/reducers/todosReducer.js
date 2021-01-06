const initialState = {
  todos: [],
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'TOGGLE_TODO': {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      )
      const isCompleted = state.todos[index].isCompleted
      const isActive = state.todos[index].isActive

      Object.assign(state.todos[index], {
        isCompleted: !isCompleted,
        isActive: !isActive,
      })

      return {
        ...state,
        todos: [...state.todos],
      }
    }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    default:
      return state
  }
}

export default todosReducer
