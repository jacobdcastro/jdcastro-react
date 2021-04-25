const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Jacob D. Castro - Developer',
    siteUrl: 'https://jdc.dev/',
  },
  pathPrefix: '/blog',
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '========helloworld========',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
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
        icon: path.resolve(__dirname, 'src', 'images', 'favicon.png'),
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve(__dirname, 'src', 'images'),
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve(__dirname, 'src', 'pages'),
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogPosts',
        path: path.resolve(__dirname, 'content', 'blogPosts'),
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src', 'components'),
          '@images': path.resolve(__dirname, 'src', 'images'),
        },
        extensions: [
          'js',
          'ts',
          'tsx',
          'css',
          'md',
          'mdx',
          'svg',
          'png',
          'json',
        ],
      },
    },
  ],
}
