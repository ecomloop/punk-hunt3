module.exports = {
  siteMetadata: {
    title: 'PunkHunt | Find them All',
    author: 'RantumBits @ecomloop',
    description: 'Complete all the CryptoPunk challenges during the Miami billboard takeover',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/rocket.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
