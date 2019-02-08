// @flow
import React, { Component, lazy, Suspense } from 'react'
import { hot } from 'react-hot-loader'

const AsyncText = lazy(() => import('./Text'))

const letterToNumber = (text: string) => {
  const n: number = text.toLowerCase().charCodeAt(0) - 96
  return n > 26 || n < 1 ? 'This is not a letter' : n
}

class App extends Component<{}, { text: string }> {
  state = { text: '' }

  handleClick = () => {
    this.setState({ text: this.input ? this.input.value : '' })
  }

  input: ?HTMLInputElement

  render() {
    const { text } = this.state

    return (
      <>
        <input
          ref={(el) => {
            this.input = el
          }}
          maxLength={1}
        />
        <button type="button" onClick={this.handleClick}>
          →
        </button>
        <Suspense fallback={<div>Loading...</div>}>
          {text && <AsyncText>{letterToNumber(text)}</AsyncText>}
        </Suspense>
      </>
    )
  }
}

export default hot(module)(App)
