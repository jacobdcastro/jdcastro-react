const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, reject } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blogPost.js');
  const projectTemplate = path.resolve('./src/templates/project.js');

  try {
    // query all blog posts
    const blogRes = await graphql(`
      query BLOG_POST_PAGES_QUERY {
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

    // create page for each blog post
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

    // query all projects
    const projectRes = await graphql(`
      query PROJECT_PAGES_QUERY {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "project" } } }
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

    // create page for each project
    projectRes.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.frontmatter.slug}`,
        component: projectTemplate,
        context: {
          id: node.id,
          slug: node.frontmatter.slug,
          // relative filepath for blogPost.js query
          imgUrl: `content/projects/${node.frontmatter.image}`,
        },
      });
    });
  } catch (error) {
    if (blogRes.errors) reject(blogRes.errors);
    else if (projectRes.errors) reject(projectRes.errors);
    else reject(error);
  }

  return;
};
