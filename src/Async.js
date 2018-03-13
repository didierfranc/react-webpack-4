// @flow
import * as React from 'react'

type Props = {
  children: React.Node,
}

export default class AsyncText extends React.Component<Props> {
  componentWillMount = async () => {
    const C = await import(/* webpackChunkName: "text" */ './Text')
    this.C = C.default
    this.forceUpdate()
  }

  C: React.StatelessFunctionalComponent<Props>

  render() {
    const { C, props: { children } } = this
    return C ? <C>{children}</C> : null
  }
}
