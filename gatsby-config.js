module.exports = {
  siteMetadata: {
    title_en: `Welcome to L’Open Lab for Kids!`,
    description_en: 'Fun and creative workshops for babies & children aged from 0 to 11 - Take a look at our different workshops',
    title_fr: `Bienvenue à bord de l’Open Lab for Kids!`,
    description_fr: 'des ateliers en anglais, créatifs et ludiques, parfaitement adaptés aux enfants de 1 à 11 ans - Nos différents ateliers'
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages/blog/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages/`
      }
    },
    'gatsby-plugin-netlify',
  ],
  pathPrefix: `/`,
}
