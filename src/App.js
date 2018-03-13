// @flow
import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'

import AsyncText from './Async'

const letterToNumber = (text: string) => {
  const n: number = text.toLowerCase().charCodeAt(0) - 96
  return n > 26 || n < 1 ? 'This is not a letter' : n
}

class App extends Component<{}, { text: string }> {
  state = { text: '' }

  input: ?HTMLInputElement

  handleClick = () => {
    this.setState({ text: this.input ? this.input.value : '' })
  }

  render() {
    const { text } = this.state

    return (
      // eslint does not support <></> yet 😿
      <Fragment>
        <input
          ref={el => {
            this.input = el
          }}
          maxLength={1}
        />
        <button onClick={this.handleClick}>→</button>
        {text && <AsyncText>{letterToNumber(text)}</AsyncText>}
      </Fragment>
    )
  }
}

export default hot(module)(App)
