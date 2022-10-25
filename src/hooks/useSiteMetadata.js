import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
      graphql`
        query SiteMetaData {
          site {
            siteMetadata {
              title
              siteUrl
              description
              navLinks {
                title
                link
              }
              author
              designer
              established
            }
          }
        }
      `
  )
  return site.siteMetadata
}
