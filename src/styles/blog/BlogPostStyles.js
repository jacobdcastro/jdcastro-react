import styled from 'styled-components';

const BlogPost = styled.article`
  margin-top: 60px;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.bgColor};
  width: 100%;

  .title {
    font-size: 2.3rem;
    margin-bottom: 14px;
  }
  .subtitle {
    font-size: 1.25rem;
    font-style: italic;
    margin: 0 0 10px;
    line-height: 1.45rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin: 0;
    height: auto;

    .listingTag {
      margin: 0 8px 5px 0;
      font-size: 0.8rem;
      font-weight: 600;
      color: ${props => props.theme.accentColor};
    }
  }

  .published {
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transition};
    margin-bottom: 3px;
    margin-right: 30px;
    font-size: 1.1rem;
  }

  .author {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;

    div {
      height: 100px;
      padding: 10px;
    }
    .portrait {
      align-self: flex-start;
    }
    .myInfo {
      height: auto;
    }
    .myName {
      margin: 0 0 10px;
    }
    p {
      font-size: 0.9rem;
      max-width: 680px;
    }
  }

  .blogContent {
    h2 {
      font-size: 2rem;
      margin: 40px 0 20px;
    }

    h3 {
      font-size: 1.7rem;
      margin: 45px 0 15px;
    }

    p {
      line-height: 1.9rem;
      font-size: 1.25rem;
    }

    .grvsc-container .grvsc-code .grvsc-line span {
      font-size: 0.66rem;
      line-height: 1rem;
    }
  }

  .closing {
    margin: 40px 60px 0;
    svg {
      transition: ${props => props.theme.transition};
      fill: ${props => props.theme.textColor};
      width: 65vw;
      height: auto;
      max-width: 400px;
    }
    h3 {
      margin-top: 15px;
      margin-left: 35px;
    }
  }

  @media (max-width: 620px) {
    .author {
      margin-bottom: 10px;
      p {
        margin-bottom: 0;
        font-size: 0.8rem;
      }
    }

    .closing {
      margin: 30px 15px 10px;

      svg {
        width: 80vw;
        height: auto;
        max-width: 380px;
      }
    }
  }
`;

export default BlogPost;
