const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

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
      best: allMdx(filter: {fileAbsolutePath: {regex: "/(best)/"}}) {
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

  // render store template (single)
  result.data.stores.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/stores/${slug}`,
      component: path.resolve(`src/templates/store-template.js`),
      context: {
        slug
      }
    });
  });

  // render best template (single)
  result.data.best.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/best/${slug}`,
      component: path.resolve(`src/templates/best-template.js`),
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


}