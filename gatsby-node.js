const {paths} = require('./src/utils/paths')

const ArtworkTemplate = paths.template('Artwork')

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions


  return await graphql(`
    query GetArtCollectionArtworks {
      artworks: allContentfulArtwork(
        sort: {fields: publishOn, order: DESC}
        filter: {collection: {in: ["Art", "Joe Horvath"]}}
      ) {
        edges {
          prev: previous {
            slug
            collection
            title
          }
          next {
            slug
            collection
            title
          }
          artwork: node {
            collection
            id
            publishOn
            slug
            title
            summary
            body {
              childMarkdownRemark {
                html
              }
            }
            art {
              gatsbyImageData(layout: CONSTRAINED, width: 768)
            }
            fullscreen: art {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  .then(({data}) => {
    if (data.errors) throw data.errors

    return ({
      artworks: data.artworks.edges,
    })
  })
  .then((result) => { // generate pages for "Art" && "Joe Horvath" collection
    result.artworks.forEach(({prev, next, artwork}) => {
      if (next) next.path = paths.artwork(next)
      if (prev) prev.path = paths.artwork(prev)
      artwork.path = paths.artwork(artwork)

      createPage({
        path: artwork.path,
        component: ArtworkTemplate,
        context: {
          prev, next, artwork
        }
      })
    })

    return result
  })
  .then((result) => { // generate pages for "Joe Horvath" collection
    result.artworks.forEach(({prev, next, artwork}) => {
      if (next) next.path = paths.artwork(next)
      if (prev) prev.path = paths.artwork(prev)
      artwork.path = paths.artwork(artwork)

      createPage({
        path: artwork.path,
        component: ArtworkTemplate,
        context: {
          prev, next, artwork
        }
      })
    })

    return result
  })
}
