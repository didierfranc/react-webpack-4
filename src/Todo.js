/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, maxlen */
import React from 'react'
import {
  shape, func, string, bool,
} from 'prop-types'
import { TOGGLE_TODO } from './store/actions'

const Todo = ({ todo: { id, text, completed }, dispatch }) => (
  <li
    onClick={() => dispatch({ type: TOGGLE_TODO, payload: { id } })}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  dispatch: func.isRequired,
  todo: shape({
    text: string,
    completed: bool,
  }).isRequired,
}

export default Todo
