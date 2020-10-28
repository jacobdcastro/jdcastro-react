import styled from 'styled-components';
import { lightTheme } from '../../styles/layout/__themes';

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${props => props.theme.bgColor};
  background: ${props => {
    if (props.theme.bgColor === lightTheme.bgColor) {
      return props.theme.bgColor;
    } else {
      if (!props.isScrolled) {
        return props.theme.bgColor;
      } else {
        return `
        linear-gradient(
          180deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(26, 30, 28, 0.891176538974965) 90%,
          rgba(26, 30, 28, 0) 100%
        )
      `;
      }
    }
  }};
  transition: background-color ${props => props.theme.transition},
    background ${props => props.theme.transition}, box-shadow 0.3s;
  box-shadow: ${props =>
    props.isScrolled && props.theme.bgColor === lightTheme.bgColor
      ? '0px 0px 10px #4d4d4d'
      : 'none'};
  display: flex;
  justify-content: center;

  .navContainer {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 15px;
    width: 100vw;
    max-width: 1000px;
    margin: 0 auto;

    #logo {
      width: 165px;
      height: auto;
      background-color: transparent;

      .headerLogoSVG {
        transition: ${props => props.theme.transition};
        fill: ${props => props.theme.textColor};
        background-color: transparent;
        width: 100%;
      }

      a {
        background-color: transparent;
        text-decoration: none;
        outline: none;
      }

      span {
        font-family: 'Montserrat', 'Helvetica', sans-serif;
        display: block;
        color: ${props => props.theme.textColor};
        font-size: 0.563rem;
        text-align: center;
        letter-spacing: 4.4px;
        margin: 0;
      }
    }
    nav {
      width: 55%;
      margin-top: 2px;
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
        margin: 0;

        li {
          margin: 0;
          list-style-type: none;
          background-color: transparent;

          a {
            font-family: 'Montserrat', 'Helvetica', 'sans-serif';
            font-weight: 600;
            font-size: 1.2rem;
            letter-spacing: 1px;
            text-decoration: none;
            padding: 0 2px 6px;
            border-bottom: 3px solid transparent;
            background-color: transparent;
          }
          a:hover {
            border-bottom: 3px solid ${props => props.theme.textColor};
          }
          .activePage {
            border-bottom: 3px solid ${props => props.theme.textColor};
          }
        }
      }
    }
  }

  @media (max-width: 980px) {
    .navContainer {
      nav {
        display: none;
      }
    }
  }

  @media (min-width: 880px) {
    height: 80px;
    .navContainer {
      height: 80px;

      #logo {
        width: 205px;
        height: auto;
        .headerLogoSVG {
          transition: ${props => props.theme.transition};
          fill: ${props => props.theme.textColor};
          width: 100%;
        }

        span {
          font-size: 0.69rem;
          letter-spacing: 5.8px;
        }
      }
    }
  }
`;

export { HeaderWrapper };
