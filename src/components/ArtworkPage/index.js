import * as React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { Layout, FeaturedImage } from 'components'
import { Nav } from './Nav'

const ImageAndFrame = ({className, onClick, image, title, children}) => (
    <div className={className} onClick={onClick}>
      <FeaturedImage image={image} alt={title} />
      {children}
    </div>
)

export const ArtworkPage = ({prev, next, artwork}) => {
  const [isMax, setMax] = React.useState(false)
  const maximize = e => setMax(true)
  const minimize = e => setMax(false)
  const {title, summary, slug, publishOn, art, body, fullscreen} = artwork
  const html = body?.childMarkdownRemark?.html || '<p>Body Text</p>'

  const MaxImage = (
      <ImageAndFrame className={cx(styles.featuredImage, styles.max)}
                     onClick={minimize}
                     image={fullscreen}
                     alt={title}>
        <a href="#" onClick={minimize} className={styles.minimize}>[Close]</a>
      </ImageAndFrame>
  )
  const ArtImage = (
      <ImageAndFrame className={cx(styles.featuredImage)}
                     onClick={maximize}
                     image={art}
                     alt={title} />
  )
  return (
      <Layout title={title}>
        <article className={cx(styles.artworkPage)}>
          <h2>{title}</h2>
          {summary ? <p className={styles.summary}>{summary}</p> : null}
          {(!summary && html) ? <section dangerouslySetInnerHTML={{__html: html}} /> : null}
          <Nav next={next} prev={prev} maximize={maximize} />
          {isMax ? MaxImage : ArtImage}
          <Nav next={next} prev={prev} maximize={maximize} />
          {(summary && html) ? <section dangerouslySetInnerHTML={{__html: html}} /> : null}
        </article>
      </Layout>
  )
}
export default ArtworkPage
