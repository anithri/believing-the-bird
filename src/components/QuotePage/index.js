import * as React from 'react'
import cx from 'classnames'
import * as styles from './styles.module.css'
import {GatsbyImage} from 'gatsby-plugin-image'

export const QuotePage = ({className, page, skipTitle}) => {
  const {title, body, images} = page
  const html = body?.childMarkdownRemark?.html
  const image = images[0]?.gatsbyImageData
  const imageTitle = images[0].title
  return (
      <article className={cx(styles.quotePage, className)}>
        {skipTitle ? null : <h2>{title}</h2>}
        <GatsbyImage image={image} alt={imageTitle} />
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </article>
  )
}
