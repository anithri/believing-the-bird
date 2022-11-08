import { BlogPage } from 'components'
import { graphql } from 'gatsby'

export default BlogPage
export const query = graphql`query GetContentfulBlogPage {
  page: contentfulPage(slug: {eq: "blog"}) {
    id
    title
    slug
    body {
      childMarkdownRemark {
        html
      }
    }
    images {
      gatsbyImageData
    }
  }
  posts: allContentfulPost(
    sort: {publishOn: DESC}
  ) {
    all: edges {
      node {
        id
        title
        summary
        slug
        year: publishOn(formatString: "YYYY")
        month: publishOn(formatString: "MM")
        day: publishOn(formatString: "DD")
      }
    }
  }
}`
