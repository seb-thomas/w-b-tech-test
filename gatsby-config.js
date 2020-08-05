/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Animal Top Trumps",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "http://localhost:3022/graphql",
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
}
