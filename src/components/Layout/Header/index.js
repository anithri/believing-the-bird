import * as styles from './styles.module.css'
import { Link } from 'gatsby'
import * as React from 'react'
import cx from 'classnames'

export const Header = ({className, title}) => (
    <header className={cx(styles.header, className)}>
      <Link to="/" title="Home Page" >
        <h1>{title}</h1>
      </Link>
    </header>
)

