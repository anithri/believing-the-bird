import * as React from 'react'
import { Link } from 'gatsby'
import {useSiteMetadata} from '../../hooks'
import * as styles from './styles.module.css'
import '../../styles/site.css'
import cx from 'classnames'
import { Decoration } from './Decoration'
import { Header } from './Header'
import { Nav } from './Nav'


export const Layout = ({grid = 'normal', children}) => {
  const {title, navLinks} = useSiteMetadata()
  return (
      <div className={cx(styles.grid, styles[grid])}>
        <Header title={title} className={styles.header} />
        <Decoration className={styles.decoration} />
        <Decoration className={styles.decoration} />
        <Nav className={styles.nav} navLinks={navLinks} />
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>Footer</footer>
      </div>
  )
}

const staticQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        navLinks {
          title
          link
        }
      }
    }
  }
`
