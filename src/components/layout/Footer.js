import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FooterWrapper from '../../styles/layout/FooterStyles';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.md" }) {
        childMarkdownRemark {
          frontmatter {
            email
            handle
            username
          }
        }
      }
    }
  `);
  const { email, handle, username } = data.file.childMarkdownRemark.frontmatter;

  return (
    <FooterWrapper>
      <p>
        <a>Sitemap</a>
      </p>
      <span>
        <a href="mailto:jdcastro.business@gmail.com">{email}</a>
      </span>
      <span>&copy;2019 - JDCastro Digital</span>
    </FooterWrapper>
  );
};

export default Footer;
