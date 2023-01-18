// import { useStaticQuery, graphql } from "gatsby"
const siteMetadata = {
  title: `Believing The Bird`,
  siteUrl: `https://believingthebird.com`,
  description: 'Celebrating the Artwork and Writings of Birdie',
  author: 'Jeanne Horvath & Joe Horvath',
  designer: 'Designed by Scott M Parrish with open source software',
  established: 2017
}
export const useSiteMetadata = () => {
  // const { site } = useStaticQuery(
  //     graphql`
  //       query SiteMetaData {
  //         site {
  //           siteMetadata {
  //             title
  //             siteUrl
  //             description
  //             author
  //             designer
  //             established
  //           }
  //         }
  //       }
  //     `
  // )
  return siteMetadata
}
