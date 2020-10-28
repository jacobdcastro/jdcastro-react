import React from 'react';
import ThemeContextWrapper from './src/utils/context/ThemeContext';
import FilterContextWrapper from './src/utils/context/FiltersContext';
import { MDXProvider } from '@mdx-js/react';
import MdxComponents from './src/utils/MdxComponents';

// provide contexts to entire app
export const wrapRootElement = ({ element }) => (
  <ThemeContextWrapper>
    <FilterContextWrapper>
      <MDXProvider components={MdxComponents}>{element}</MDXProvider>
    </FilterContextWrapper>
  </ThemeContextWrapper>
);
