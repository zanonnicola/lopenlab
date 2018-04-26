module.exports = {
  siteMetadata: {
    title: `L'OpenLab for Kids`,
    description: 'Fun and creative workshops for babies & children aged from 0 to 11'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog/`
      }
    },
  ],
}
