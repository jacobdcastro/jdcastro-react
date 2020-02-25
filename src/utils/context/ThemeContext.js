import React, { useState } from 'react';
import { lightTheme, darkTheme } from '../../styles/layout/__themes';
import { ThemeContext } from './index';

const setDefaultTheme = () => {
  const today = new Date();
  const hour = today.getHours();

  if (hour >= 19 || hour <= 6) return darkTheme;
  else if (hour > 6 && hour < 19) return lightTheme;
  else return lightTheme;
};

// ? provider component wraps entire app in gatsby-browser.js
const ThemeContextWrapper = ({ children }) => {
  const [themeState, setThemeState] = useState({
    currentTheme: setDefaultTheme(),
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

  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
