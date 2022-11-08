module.exports = {
  siteMetadata: {
    title: `Believing The Bird`,
    siteUrl: `https://believingthebird.com`,
    navLinks: [
      {title: "Jeanne's Art", link: '/JeanneHorvathArt'},
      {title: 'About Jeanne', link: '/about'},
      {title: "Jeanne's Blog", link: '/blog'},
      {title: "About Joe", link: '/about-joe'},
      {title: "Joe's Art", link: '/JoeHorvathArt'},
    ],
    description: "Celebrating the Artwork and Writings of Birdie",
    author: 'Jeanne Horvath & Joe Horvath',
    designer: 'Designed by Scott M Parrish with open source software',
    established: 2017
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        downloadLocal: process.env.CONTENTFUL_DOWNLOAD
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    "gatsby-plugin-root-import",
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/styles/typography',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap', {
      resolve: 'gatsby-plugin-manifest',
      options: {
        'icon': 'src/images/icon.png'
      }
    }, 'gatsby-plugin-mdx', {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'images',
        'path': './src/images/'
      },
      __key: 'images'
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        'name': 'pages',
        'path': './src/pages/'
      },
      __key: 'pages'
    }]
}
