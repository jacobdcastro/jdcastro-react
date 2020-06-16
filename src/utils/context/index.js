import { createContext } from 'react';
import { lightTheme } from '../../styles/layout/__themes';

export const ThemeContext = createContext({
  currentTheme: lightTheme,
  transition: '0.5s',
  isLight: true,
  toggleTheme: () => {},
});

export const FilterContext = createContext({
  filterIsActive: false,
  toggleFilterItem: () => {},
  filters: {
    javascript: false,
    react: false,
    nodejs: false,
    express: false,
    mongodb: false,
    fullstack: false,
    gatsby: false,
    css: false,
    html: false,
    design: false,
    conferences: false,
    deployment: false,
    cms: false,
    life: false,
  },
});
