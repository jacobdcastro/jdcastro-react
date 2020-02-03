import React from 'react';
import ThemeContextWrapper from './src/utils/context/ThemeContext';
import FilterContextWrapper from './src/utils/context/FiltersContext';

// provide contexts to entire app
export const wrapRootElement = ({ element }) => (
  <ThemeContextWrapper>
    <FilterContextWrapper>{element}</FilterContextWrapper>
  </ThemeContextWrapper>
);

// ? primsjs stuff
require('prismjs/themes/prism-tomorrow.css');
