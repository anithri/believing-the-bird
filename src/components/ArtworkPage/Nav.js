import * as React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { Link } from 'gatsby'

export const Nav = ({ prev, next, all, className }) => {
  return (
      <nav className={cx(className, styles.nav)}>
        {prev && (
            <Link className={styles.prev} to={prev.path}>
              <span className={styles.arrow}>⮈</span> {prev.title}
            </Link>
        )}

        {/*<Link to={all.path} className={styles.all}>*/}
        {/*  All <span className={styles.arrow}>⮉</span>*/}
        {/*</Link>*/}

        {next && (
            <Link className={styles.next} to={next.path}>
              {next.title} <span className={styles.arrow}>⮊</span>
            </Link>
        )}
      </nav>
  )
}
