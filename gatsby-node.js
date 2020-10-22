const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
    }
  `);

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path:`/news/${slug}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        slug
      }
    });
  });

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        category
      }
    });
  });
}