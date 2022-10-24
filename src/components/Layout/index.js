import * as React from 'react'
import * as styles from './styles.module.css'
import '../../styles/site.css'
import cx from 'classnames'
export const Layout = ({grid = 'normal', children}) => {

  return (
      <div className={cx(styles.grid, styles.normal)}>
        <header className={styles.header}><h1>Title</h1></header>
        <nav className={styles.nav}>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
          </ul>
        </nav>
        <div className={styles.decoration}>Decoration</div>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>Footer</footer>
      </div>
  )
}
