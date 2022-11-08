import { graphql } from 'gatsby'
import { ArtworkIndexPage } from 'components'

export default ArtworkIndexPage

export const query = graphql`query GetArtPage {
  page: contentfulPage(slug: {eq: "JeanneHorvathArt"}) {
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
    sort: {publishOn: DESC}
    filter: {collection: {eq: "Art"}}
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
          gatsbyImageData(layout: FIXED, width: 90)
        }
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}`
