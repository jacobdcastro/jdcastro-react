import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Moment from 'react-moment';
import BlogAuthor from '../components/blog/BlogAuthor';
import BlogPost from '../styles/blog/BlogPostStyles';
import JDCLogo from '../images/svg/SignatureLogoSVG';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// TODO add next and previous post links (from context)

const blogPost = ({ path, data }) => {
  const {
    title,
    subtitle,
    slug,
    type,
    image,
    imageTitle,
    imageAlt,
    date,
    tags,
  } = data.mdx.frontmatter;

  const seo = {
    page: type,
    title: title,
    description: data.mdx.excerpt,
    url: `https://jacobdcastro.com/${slug}`,
    imgUrl: image.publicURL,
    imgAlt: imageAlt,
    breadcrumbs: [
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: title,
        path: `/blog/${slug}`,
      },
    ],
  };

  return (
    <Layout seo={seo} path={path} style={{ textAlign: 'left' }}>
      <BlogPost>
        <header>
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <ul>
            {tags &&
              tags.map((tag, i) => (
                <li className="listingTag" key={i}>
                  {tag}
                </li>
              ))}
          </ul>
          <small className="published">
            Published: <Moment date={date} format="MMM DD, YYYY" />
          </small>

          {data.mdx.timeToRead &&
            (type === 'tutorial' ? (
              <span>Approx. {data.mdx.timeToRead + 5} minutes to complete</span>
            ) : (
              <span>{data.mdx.timeToRead} minute read</span>
            ))}

          <BlogAuthor />
        </header>

        <Img
          style={{
            marginBottom: '25px',
          }}
          fluid={image.childImageSharp.fluid}
          alt={imageAlt}
          title={imageTitle}
        />

        <section className="blogContent">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </section>

        <div className="closing">
          <JDCLogo />
          <h3>- Jacob D. Castro</h3>
        </div>
      </BlogPost>
    </Layout>
  );
};

blogPost.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default blogPost;

export const BLOG_POST_QUERY = graphql`
  query BLOG_POST_QUERY($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 370)
      body
      timeToRead
      frontmatter {
        type
        title
        slug
        subtitle
        image {
          childImageSharp {
            fluid(pngQuality: 100, webpQuality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        imageTitle
        imageAlt
        date
        tags
      }
    }
  }
`;
