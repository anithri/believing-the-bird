import * as React from "react"
import {Layout} from '../components'
const IndexPage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  )
}

export const query = graphql`
  query GetIndexPage {
    page: contentfulPage(slug: { eq: "home" }) {
      id
      title
      slug
      pageQuote {
        lines
        caption
      }
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

