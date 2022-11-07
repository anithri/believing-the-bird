import { graphql } from 'gatsby'
import { ArtworkIndexPage } from 'components'

export default ArtworkIndexPage

export const query = graphql`
  query GetHerbsArtPage {
    page: contentfulPage(slug: { eq: "herbs" }) {
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
    }
    artwork: allContentfulArtwork(
      sort: { fields: publishOn, order: DESC }
      filter: { collection: { eq: "Herbs" } }
    ) {
      all: edges {
        node {
          collection
          id
          publishOn
          slug
          title
          summary
          art {
            gatsbyImageData(layout: FIXED, width: 120)
          }
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
