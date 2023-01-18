import * as React from 'react'
import { Layout, HomePage } from 'components'
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  return (
      <Layout>
        <HomePage page={data.page} skipTitle={true} />
      </Layout>
  )
}

export const query = graphql`
  query GetIndexPage {
    page: contentfulPage(slug: { eq: "home" }) {
      id
      title
      body {
        childMarkdownRemark {
          html
        }
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
