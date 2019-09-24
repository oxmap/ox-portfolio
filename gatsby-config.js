module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["src/assets/scss"],
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300,600`
        ]
      }
    },
  ]
};
