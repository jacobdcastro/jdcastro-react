const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Jacob D. Castro',
    siteUrl: 'https://jacobdcastro.com',
  },
  pathPrefix: '/blog',
  pathPrefix: '/projects',
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-lodash',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: {
                default: 'Atom One Dark',
                // parentSelector: {
                //   '#layoutWrapper[data-theme=light]': 'Atom One Light',
                //   '#layoutWrapper[data-theme=dark]': 'Atom One Dark',
                // },
              },
              extensions: ['vscode-theme-onedark', 'vscode-theme-onelight'],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jacob D. Castro',
        short_name: 'JDCastro',
        start_url: '/',
        background_color: '#000',
        theme_color: '#6128d3',
        lang: 'en',
        display: 'standalone',
        icon: path.join(__dirname, 'src', 'images', 'favicon.png'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'content'),
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'fonts',
    //     path: path.join(__dirname, 'static', 'fonts'),
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-130258530-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        // optimizeId: `YOUR_GOOGLE_OPTIMIZE_TRACKING_ID`,

        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        // cookieDomain: `jacobdcastro.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: path.join(__dirname, 'src', 'utils', 'typography'),
        omitGoogleFont: true,
      },
    },
    {
      resolve: 'gatsby-plugin-local-font-loader',
      options: {
        pathsToFiles: [
          path.join(__dirname, 'static', 'fonts', 'JetBrainsMono'),
          path.join(__dirname, 'static', 'fonts', 'Montserrat'),
          path.join(__dirname, 'static', 'fonts', 'OpenSans'),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: path.join(
          __dirname,
          'src',
          'utils',
          'robots-txt.config.js'
        ),
      },
    },
  ],
};
