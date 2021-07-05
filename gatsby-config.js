module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "jamieguerrero",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "76ee529e1d9c07f74e23dd26362741",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
  ],
};
