import * as React from "react"
import {Layout, AboutPage} from 'components'
import {graphql} from 'gatsby'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <AboutPage page={data.page}/>
    </Layout>
  )
}

export const query = graphql`
  query GetIndexPage {
    page: contentfulPage(slug: { eq: "about-joe" }) {
      id
      title
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
        gatsbyImageData(layout: FIXED, width: 150)
      }
    }
  }
`

export default IndexPage
export {Head} from 'components'
