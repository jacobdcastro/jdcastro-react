import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import { AboutPageWrapper } from '../styles/about/AboutStyles';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const About = ({ path, data }) => {
  const seo = {
    page: 'about',
    title: 'About Me',
    description: data.me.childMdx.excerpt,
    url: 'https://jacobdcastro.com/about',
    imgUrl: data.pageImg.publicURL,
    imgAlt:
      'jdcastro logo, twitter, instagram, facebook, github icons with @jacobdcastro username',
    breadcrumbs: [
      {
        name: 'About',
        path: '/about',
      },
    ],
  };

  return (
    <Layout seo={seo} path={path}>
      <AboutPageWrapper>
        <MDXRenderer>{data.me.childMdx.body}</MDXRenderer>
      </AboutPageWrapper>
    </Layout>
  );
};

About.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default About;

export const ABOUT_PAGE_QUERY = graphql`
  query ABOUT_PAGE_QUERY {
    me: file(relativePath: { eq: "me.md" }) {
      childMdx {
        excerpt(pruneLength: 370)
        body
        frontmatter {
          title
          lastUpdated
          name
          email
          miniBio
          handle
          username
          twitterURL
          instagramURL
          githubURL
          facebookURL
          linkedinURL
        }
      }
    }

    pageImg: file(relativePath: { eq: "page-meta-img.jpg" }) {
      publicURL # used for SEO
    }
  }
`;
