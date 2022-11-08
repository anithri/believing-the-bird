import * as React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Nav = ({ prev, next, maximize, className }) => {
  return (
      <nav className={cx(className, styles.nav)}>
        {prev?.path && (
            <AniLink fade className={styles.prev} to={prev.path}>
              <span className={styles.arrow}>⮈</span> {prev.title}
            </AniLink>
        )}

        <a href='#' onClick={maximize}
           title="Full Screen"
           className={styles.maximize}>
          &#x26F6;
        </a>

        {next?.path && (
            <AniLink fade className={styles.next} to={next.path}>
              {next.title} <span className={styles.arrow}>⮊</span>
            </AniLink>
        )}
      </nav>
  )
}
