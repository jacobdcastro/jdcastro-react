const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, reject } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blogPost.js');
  // const projectTemplate = path.resolve('./src/templates/project.js');

  try {
    // query all blog posts
    const blogRes = await graphql(`
      query BLOG_POST_PAGES_QUERY {
        allMdx(
          filter: { frontmatter: { type: { eq: "blogPost" } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            next {
              frontmatter {
                title
                slug
                date
              }
            }
            node {
              frontmatter {
                slug
              }
            }
            previous {
              frontmatter {
                title
                slug
                date
              }
            }
          }
        }
      }
    `);

    // create page for each blog post
    await blogRes.data.allMdx.edges.forEach(({ next, node, previous }) => {
      createPage({
        path: `blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
          prev: previous,
          next,
        },
      });
    });

    // query all projects
    // const projectRes = await graphql(`
    //   query PROJECT_PAGES_QUERY {
    //     allMarkdownRemark(
    //       filter: { frontmatter: { type: { eq: "project" } } }
    //     ) {
    //       edges {
    //         node {
    //           id
    //           frontmatter {
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   }
    // `);

    // // create page for each project
    // await projectRes.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //   createPage({
    //     path: `blog/${node.frontmatter.slug}`,
    //     component: projectTemplate,
    //     context: {
    //       id: node.id,
    //       slug: node.frontmatter.slug,
    //     },
    //   });
    // });
  } catch (error) {
    // if (blogRes.errors) reject(blogRes.errors);
    // else if (projectRes.errors) reject(projectRes.errors);
    reject(error);
  }

  return;
};
