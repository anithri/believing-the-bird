import * as React from 'react'
import { Layout, PagedList, ArtworkSummary } from 'components'

export const ArtworkIndexPage = ({data, ...props}) => {
  console.log('ArtworkPage', data, props)
  const {title, body, pageQuote, images} = data.page
  const content = body?.childMarkdownRemark?.html
  const artwork = data.artwork.all.map(({node}) => node)
  return (
      <Layout title={title}>
        <h2>{title}</h2>
        <PagedList
            list={artwork}
            mkElement={(artwork, idx) => <ArtworkSummary artwork={artwork} idx={idx} />}
        />
      </Layout>
  )
}
