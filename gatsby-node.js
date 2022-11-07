const path = require('path')
const {paths} = require('./src/utils/paths')

const ArtworkTemplate = path.resolve(paths.template('Artwork'))
const BlogPostTemplate = path.resolve(paths.template('BlogPost'))

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  return await graphql(`
    query GetArtCollectionArtworksAndBlogPosts {
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
              gatsbyImageData(layout: CONSTRAINED, height: 490)
            }
            fullscreen: art {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      posts: allContentfulPost {
        edges {
          prev: previous {
            id
            title
            slug
            year: publishOn(formatString: "YYYY")
            month: publishOn(formatString: "MM")
            day: publishOn(formatString: "DD")
          }
          next {
            id
            title
            slug
            year: publishOn(formatString: "YYYY")
            month: publishOn(formatString: "MM")
            day: publishOn(formatString: "DD")
          }
          post: node {
            id
            slug
            title
            publishOn
            body {
              childMarkdownRemark {
                html
              }
            }
            images {
              gatsbyImageData(layout: FIXED, width: 800)
            }
            year: publishOn(formatString: "YYYY")
            month: publishOn(formatString: "MM")
            day: publishOn(formatString: "DD")
          }
        }
      }
    }
  `)
  .then(({data}) => {
    if (data.errors) throw data.errors

    return ({
      artworks: data?.artworks?.edges,
      posts: data?.posts?.edges,
    })
  })
  .then((result) => { // generate pages for "Art" && "Joe Horvath" collection
    result.artworks.forEach(({prev, next, artwork}) => {
      if (next && next.collection === artwork.collection) next.path = paths.artwork(next)
      if (prev && prev.collection === artwork.collection) prev.path = paths.artwork(prev)
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
  .then((result) => {
    result.posts.forEach(({prev, next, post}) => {
      createPage({
        path: paths.byDate(post),
        component: BlogPostTemplate,
        context: {
          prev, next, post
        },
      })
    })
    return result
  })
}
