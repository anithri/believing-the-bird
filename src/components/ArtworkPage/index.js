import * as React from 'react'
import * as styles from './styles.module.css'
import cx from 'classnames'
import { Layout, FeaturedImage } from 'components'
import { Nav } from './Nav'

export const ArtworkPage = ({prev, next, artwork}) => {
  const [isMax, setMax] = React.useState(false)
  const {title, summary, slug, publishOn, art, body, fullscreen} = artwork
  const html = body?.childMarkdownRemark?.html || "<p>Body Text</p>"
  return (
      <Layout title={title} isMax>
        <article className={cx(styles.artworkPage)}>
          <h2>{title}</h2>
          {summary ? <p className={styles.summary}>{summary}</p> : null}
          {(!summary && html) ? <section dangerouslySetInnerHTML={{__html: html} } /> : null}
          <Nav next={next} prev={prev}  />
          <div onClick={() => setMax(!isMax)}>
            <FeaturedImage image={art} alt={title} />
          </div>
          <Nav next={next} prev={prev} />
          {(summary && html) ? <section dangerouslySetInnerHTML={{__html: html} } /> : null}
        </article>
      </Layout>
  )
}
export default ArtworkPage
