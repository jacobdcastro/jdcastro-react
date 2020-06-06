import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import ProjectListing from '../components/projects/ProjectListing';
import ProjectsPageWrapper from '../styles/projects/ProjectsPageStyles';

const Projects = ({ path, data }) => {
  const seo = {
    page: 'projects',
    title: 'Projects',
    description:
      // eslint-disable-next-line quotes
      "Some project examples of mine. Ranging from personal side projects to paid client projects, I've had a lot of fun!",
    // imgUrl: `${data.image.publicURL}`,
    // imgAlt:
    //   'jdcastro logo, twitter, instagram, facebook, github icons with @jacobdcastro username',
    breadcrumbs: [
      {
        name: 'Projects',
        path: '/projects',
      },
    ],
  };

  return (
    <Layout seo={seo} path={path}>
      <ProjectsPageWrapper>
        <h1>Projects</h1>
        <ProjectListing />
        {/* map a list of projects */}
      </ProjectsPageWrapper>
    </Layout>
  );
};

Projects.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

// export const PROJECTS_PAGE_QUERY = graphql`
//   query PROJECTS_PAGE_QUERY {
//     allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
//       edges {
//         node {
//           id
//           html
//           frontmatter {
//             slug
//             title
//             description
//             image {
//               childImageSharp {
//                 fluid {
//                   ...GatsbyImageSharpFluid_withWebp
//                 }
//               }
//             }
//             imageTitle
//             imageAlt
//             startDate
//             endDate
//             projectType
//             stack
//             repoUrl
//             liveUrl
//             type
//           }
//         }
//       }
//     }
//   }
// `;

export default Projects;
