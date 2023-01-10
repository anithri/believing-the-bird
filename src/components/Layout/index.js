import * as React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from 'hooks'
import * as styles from './styles.module.css'
import 'styles/site.css'
import cx from 'classnames'
import { Decoration } from './Decoration'
import { Header } from './Header'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { useState } from 'react'

export const NavBtn = ({className, toggle}) => (
    <span className={cx(className, styles.navBtn)} onClick={toggle}>☰</span>
)
export const Layout = ({grid = 'normal', className, children}) => {
  const {title, navLinks} = useSiteMetadata()
  const [navIsOpen, setNavOpen] = useState(false)
  const toggleNav = () => setNavOpen(orig => !orig)

  return (
      <div className={cx(styles.grid, styles[grid])}>
        <Header title={title} className={styles.header} />
        <Decoration className={styles.decoration} />
        <NavBtn toggle={toggleNav} />
        <Nav className={cx(styles.nav, navIsOpen && styles.navIsOpen)} navLinks={navLinks} />
        <main className={cx(styles.main, className)}>
          {children}
        </main>
        <Footer className={styles.footer} />
      </div>
  )
}
