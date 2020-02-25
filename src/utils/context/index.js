import { createContext } from 'react';
import { lightTheme, darkTheme } from '../../styles/layout/__themes';

const setDefaultTheme = () => {
  const today = new Date();
  const hour = today.getHours();

  if (hour >= 19 || hour <= 6) return darkTheme;
  else if (hour > 6 && hour < 19) return lightTheme;
  else return lightTheme;
};

export const ThemeContext = createContext({
  currentTheme: setDefaultTheme(),
  transition: '0.5s',
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
