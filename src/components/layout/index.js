import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../utils/context';
import { ThemeProvider } from 'styled-components';
import SEO from './SEO';
import PropTypes from 'prop-types';

import { LayoutWrapper } from '../../styles/layout/LayoutStyles';
import Header from './Header';
import ThemeToggleBtn from './ThemeToggleBtn';
import Footer from './Footer';
import MobileNav from './MobileNav';

const Layout = ({ children, path, seo }) => {
  // subscribes to value from ../utils/ThemeContext.js and
  // gives current theme to styled-components <ThemeProvider>
  const { isLight, currentTheme } = useContext(ThemeContext);
  let [mobileNavIsOpen, toggleMobileNav] = useState(false);

  const mobileNavAction = () => {
    toggleMobileNav(
      mobileNavIsOpen ? (mobileNavIsOpen = false) : (mobileNavIsOpen = true)
    );
  };

  // adds smooth scrolling
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('smooth-scroll')('a[href*="#"]');
    }
  });

  return (
    <ThemeProvider theme={currentTheme}>
      <LayoutWrapper id="layoutWrapper" data-theme={isLight ? 'light' : 'dark'}>
        <SEO seo={seo} />
        <div style={{ position: 'absolute', top: '0', zIndex: '1' }}>
          <Header />
          <MobileNav
            mobileNavIsOpen={mobileNavIsOpen}
            action={mobileNavAction}
          />
        </div>

        <main>{children}</main>

        <ThemeToggleBtn />
        <Footer path={path} />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  seo: PropTypes.object.isRequired,
};

export default Layout;
