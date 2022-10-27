import * as React from 'react'
import { Layout, QuotePage } from 'components'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  return (
      <Layout>
        <QuotePage page={data.page} skipTitle={true} />
      </Layout>
  )
}

export const query = graphql`
  query GetIndexPage {
    page: contentfulPage(slug: { eq: "home" }) {
      id
      title
      pageQuote {
        lines
        caption
      }
      images {
        title
        gatsbyImageData(layout: CONSTRAINED, width: 768)
      }
    }
  }
`

export default IndexPage
export { Head } from 'components'
