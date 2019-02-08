import React, {
  lazy, Suspense, useReducer, createRef,
} from 'react'
import { hot } from 'react-hot-loader'

import reducer from './store/reducer'
import { ADD_TODO } from './store/actions'

const Todo = lazy(() => import('./Todo'))

function App() {
  const input = createRef()
  const [state, dispatch] = useReducer(reducer, { todos: [] })

  return (
    <>
      <input ref={input} />
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: ADD_TODO,
            payload: {
              text: input.current.value,
            },
          })

          input.current.value = ''
        }}
      >
        +
      </button>
      {state.todos.map(todo => (
        <Suspense key={todo.id} fallback={<div>Loading...</div>}>
          <Todo todo={todo} dispatch={dispatch} />
        </Suspense>
      ))}
    </>
  )
}

export default hot(module)(App)
