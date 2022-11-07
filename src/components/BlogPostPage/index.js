import * as React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { GatsbyImage } from 'gatsby-plugin-image'
import {Layout} from '../Layout'

export const BlogPostPage = ({prev, next, post}) => {
  const {title, images, body} = post

  const image = Array.isArray(images) ? images[0]?.gatsbyImageData : null
  const imageTitle = image?.title

  const {html} = body.childMarkdownRemark

  return (
      <Layout title={title}>
      <article className={cx(styles.blogPostPage)}>
        <h2>{title}</h2>
        <section>
          {image ? <GatsbyImage image={image} alt={imageTitle} className="floatLeft"  /> : null}
          <div dangerouslySetInnerHTML={{__html: html}} />
        </section>
      </article>
      </Layout>
  )
}
