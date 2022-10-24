import * as React from "react"
import {Layout, QuotePage} from '../components'
import {graphql} from 'gatsby'
import { useSiteMetadata } from '../hooks'
const IndexPage = ({data}) => {
  return (
    <Layout>
      <QuotePage page={data.page} skipTitle={true}/>
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
export const Head = ({ _location, _params, data, _pageContext }) => {
  const {title} = useSiteMetadata()
  return (
      <>
        <title>{title} - {data.page.title}</title>
      </>
  )
}
