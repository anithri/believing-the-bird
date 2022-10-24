import React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'

export const Decoration = ({ className }) => (
  <aside className={cx(className, styles.decoration)}>
    <p>Bird In Flight</p>
  </aside>
)
