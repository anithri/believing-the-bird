import { graphql } from 'gatsby'
import { ArtworkIndexPage } from 'components'

export default ArtworkIndexPage

export const query = graphql`
  query GetJoeHorvathArtPage {
    page: contentfulPage(slug: { eq: "JoeHorvathArt" }) {
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
      filter: { collection: { eq: "Joe Horvath" } }
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
