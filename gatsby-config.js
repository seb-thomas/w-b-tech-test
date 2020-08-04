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
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "JSON_GRAPHQL_SERVER",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "jsonGraphQlServer",
        // Url to query from
        url: "http://localhost:3022/",
      },
    },
    // {
    //   resolve: "gatsby-plugin-apollo",
    //   options: {
    //     uri: "http://localhost:3022/",
    //   },
    // },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
}
