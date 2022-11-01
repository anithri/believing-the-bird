import * as React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { Link } from 'gatsby'

export const Nav = ({ prev, next, maximize, className }) => {
  return (
      <nav className={cx(className, styles.nav)}>
        {prev?.path && (
            <Link className={styles.prev} to={prev.path}>
              <span className={styles.arrow}>⮈</span> {prev.title}
            </Link>
        )}

        <a href='#' onClick={maximize}
           title="Full Screen"
           className={styles.maximize}>
          &#x26F6;
        </a>

        {next?.path && (
            <Link className={styles.next} to={next.path}>
              {next.title} <span className={styles.arrow}>⮊</span>
            </Link>
        )}
      </nav>
  )
}
