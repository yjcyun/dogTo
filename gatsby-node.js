const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      articles: allMdx(filter: {fileAbsolutePath: {regex: "/(articles)/"}}) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      stores: allMdx(filter: {fileAbsolutePath: {regex: "/(stores)/"}}) {
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
  // render article template
  result.data.articles.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/news/${slug}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        slug
      }
    });
  });

  // render category template
  // result.data.categories.distinct.forEach(category => {
  //   createPage({
  //     path: `/${category}`,
  //     component: path.resolve(`src/templates/article-template.js`),
  //     context: {
  //       category
  //     }
  //   });
  // });

  // render stores template
  const stores = result.data.stores.nodes;
  const storesPerPage = 6;
  const numOfPages = Math.ceil(stores.length / storesPerPage);

  Array.from({ length: numOfPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/stores` : `/stores/${i + 1}`,
      component: path.resolve(`src/templates/stores-template.js`),
      context: {
        limit: storesPerPage,
        skip: i * storesPerPage,
        numOfPages,
        currentPage: i + 1
      }
    });
  });
}