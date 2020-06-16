import React, { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../../styles/layout/__themes';
import { ThemeContext } from './index';

// ? provider component wraps entire app in gatsby-browser.js
const ThemeContextWrapper = ({ children }) => {
  const [themeState, setThemeState] = useState({
    currentTheme: lightTheme,
    isLight: true,
    transition: '0.5s',
  });

  const toggleTheme = () => {
    setThemeState({
      ...themeState,
      currentTheme:
        themeState.currentTheme === lightTheme ? darkTheme : lightTheme,
    });
  };

  if (!themeState.toggleTheme) setThemeState({ ...themeState, toggleTheme });

  useEffect(() => {
    const now = new Date();
    const time = now.getHours();

    if (time >= 19 || time <= 6) {
      setThemeState({
        ...themeState,
        currentTheme: darkTheme,
        isLight: false,
      });
    } else {
      setThemeState({
        ...themeState,
        currentTheme: lightTheme,
        isLight: true,
      });
    }
  }, []);

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
