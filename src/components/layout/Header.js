import React from 'react';
import { Link } from 'gatsby';
import LogoSVG from '../../images/svg/SignatureLogoSVG'; // inline svg component
import { HeaderWrapper } from '../../styles/layout/HeaderStyles';
import useScrollListener from '../../utils/hooks/useScrollListener';
// import '../../styles/layout/hamburgers.css';

const Header = () => {
  // custom hook listens to scroll values and sets state
  // isScrolled value sent to <HeaderWrapper> styled component
  let isScrolled = useScrollListener();

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <div className="navContainer">
        <div id="logo">
          <Link to="/" aria-label="to home page">
            <LogoSVG />
            <h2>JACOB D. CASTRO</h2>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link activeClassName="activePage" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/about">
                About Me
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
