const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  result.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `blogs/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
