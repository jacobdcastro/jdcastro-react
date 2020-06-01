import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BlogAuthor = () => {
  const myData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.md" }) {
        childMdx {
          id
          frontmatter {
            name
            miniBio
            email
            handle
            twitterURL
            instagramURL
            githubURL
            linkedinURL
          }
        }
      }

      portrait: file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const { name, miniBio } = myData.file.childMdx.frontmatter;

  return (
    <div className="author">
      <div className="portrait">
        <Img
          fluid={myData.portrait.childImageSharp.fluid}
          title="Jacob D. Castro"
          alt="photo from side of me looking left with sunset beach in background"
          style={{
            height: '80px',
            width: '80px',
            borderRadius: '100%',
          }}
        />
      </div>
      <div className="myInfo">
        <h3 className="myName">By: {name}</h3>
        <p>{miniBio}</p>
      </div>
    </div>
  );
};

export default BlogAuthor;
