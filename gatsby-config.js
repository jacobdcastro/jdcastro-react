module.exports = {
  siteMetadata: {
    title: 'Jacob D. Castro',
    siteUrl: 'https://jacobdcastro.com',
  },
  pathPrefix: '/blog',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jacob D. Castro',
        short_name: 'JDCastro',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#7048e8',
        lang: 'en',
        display: 'standalone',
        icon: './src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
