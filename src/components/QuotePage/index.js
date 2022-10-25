import * as React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Blockquote } from 'components'

export const QuotePage = ({className, page, skipTitle}) => {
  const {title, images, pageQuote} = page

  const image = images[0]?.gatsbyImageData
  const imageTitle = images[0]?.title

  return (
      <article className={cx(styles.quotePage, className)}>
        {skipTitle ? null : <h2>{title}</h2>}
        {image ? <GatsbyImage image={image} alt={imageTitle} /> : null}
        {pageQuote ? <Blockquote quote={pageQuote} /> : null}
      </article>
  )
}
