module.exports = {
  siteMetadata: {
    title: 'Tom Plucinski',
    author: 'Tom Plucinski',
    description: 'A personal website made with Gatsby.js',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tomplucinskiwebsite',
        short_name: 'tpwebsite',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
