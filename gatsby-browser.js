import React from 'react';
import ThemeContextWrapper from './src/utils/context/ThemeContext';
import FilterContextWrapper from './src/utils/context/FiltersContext';
import { MDXProvider } from '@mdx-js/react';

// ? primsjs stuff
require('prismjs/themes/prism-tomorrow.css');

// provide contexts to entire app
export const wrapRootElement = ({ element }) => (
  <ThemeContextWrapper>
    <FilterContextWrapper>
      <MDXProvider>{element}</MDXProvider>
    </FilterContextWrapper>
  </ThemeContextWrapper>
);
