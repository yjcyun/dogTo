module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stores`,
        path: `${__dirname}/stores`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `best`,
        path: `${__dirname}/best`
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
      },
    }
  ],
}
