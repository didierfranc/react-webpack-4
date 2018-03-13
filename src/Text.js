// @flow
import * as React from 'react'
import { red } from './App.css'

type Props = {
  children: React.Node,
}

const Text = ({ children }: Props) => (
  <span className={Number(children) ? '' : red}>{children}</span>
)

export default Text
