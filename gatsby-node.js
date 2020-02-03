const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, reject } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blogPost.js');

  try {
    const blogRes = await graphql(`
      {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "blogPost" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              frontmatter {
                slug
                image
              }
            }
          }
        }
      }
    `);

    blogRes.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          id: node.id,
          slug: node.frontmatter.slug,
          // relative filepath for blogPost.js query
          imgUrl: `content/blog-posts/${node.frontmatter.image}`,
        },
      });
    });
  } catch (error) {
    reject(blogRes.errors);
  }

  return;
};
