import * as React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { Layout, FeaturedImage } from 'components'
import { Nav } from './Nav'

export const ArtworkPage = ({prev, next, artwork}) => {
  const [isMax, setMax] = React.useState(false)
  const maximize = e => setMax(true)
  const minimize = e => setMax(false)
  const {title, summary, slug, publishOn, art, body, fullscreen} = artwork
  const html = body?.childMarkdownRemark?.html || '<p>Body Text</p>'
  return (
      <Layout title={title} isMax>
        <article className={cx(styles.artworkPage)}>
          <h2>{title}</h2>
          {summary ? <p className={styles.summary}>{summary}</p> : null}
          {(!summary && html) ? <section dangerouslySetInnerHTML={{__html: html}} /> : null}
          <Nav next={next} prev={prev} maximize={maximize} />
          <div className={cx(styles.featuredImage, isMax && styles.max)} onClick={isMax ? minimize : maximize}>
            <FeaturedImage  image={isMax ? fullscreen : art} alt={title} className={styles.featuredImage} />
            {isMax && <a href="#" onClick={minimize} className={styles.minimize}>[Close]</a>}
          </div>
          <Nav next={next} prev={prev} maximize={maximize} />
          {(summary && html) ? <section dangerouslySetInnerHTML={{__html: html}} /> : null}
        </article>
      </Layout>
  )
}
export default ArtworkPage
