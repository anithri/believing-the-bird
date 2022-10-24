import * as React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { Link } from 'gatsby'

export const Nav = ({className, navLinks}) => {
  const allLinks = []
  navLinks.forEach(({title, link}, idx) => {
        allLinks.push(
            <li key={link}>
              <Link to={link}>{title}</Link>
            </li>
        )
        allLinks.push(
            <li key={`space-${idx}`} className={styles.spacer} />
        )
      }
  )
  allLinks.pop() // get rid of last spacer
  return (
      <nav className={cx(className, styles.nav)}>
        <ul>{allLinks}</ul>
      </nav>
  )
}
