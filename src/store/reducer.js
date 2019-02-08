import { v4 } from 'uuid'
import { ADD_TODO, TOGGLE_TODO } from './actions'

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload, id: v4() }],
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo)),
      }
    default: {
      if (action.type) {
        throw new Error(`unknown action type ${action.type}`)
      } else {
        throw new Error('malformed action')
      }
    }
  }
}
