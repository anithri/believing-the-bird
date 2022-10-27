import * as React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'

export const AboutPage = ({className, page, skipTitle}) => {
  const {title, images, body} = page

  const image = images[0]?.gatsbyImageData
  const imageTitle = images[0]?.title

  const {html} = body.childMarkdownRemark

  return (
      <article className={cx(styles.aboutPage, className)}>
        {skipTitle ? null : <h2>{title}</h2>}
        <section>
          {image ? <GatsbyImage image={image} alt={imageTitle} className="floatLeft"  /> : null}
          <div dangerouslySetInnerHTML={{__html: html}} />
        </section>
      </article>
  )
}
