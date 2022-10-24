module.exports = {
  siteMetadata: {
    title: `Believing The Bird`,
    siteUrl: `https://believingthebird.com`,
    navLinks: [
      {title: 'First', link: '/first'},
      {title: 'Second', link: '/second'},
      {title: 'Third', link: '/third'},
      {title: 'Fourth', link: '/fourth'},
      {title: 'Fifth', link: '/fifth'},
    ]
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST,
    }
  }, 'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
