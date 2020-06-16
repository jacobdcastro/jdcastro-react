import React from 'react';
import PropTypes from 'prop-types';

const HTML = props => {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link type="text/css" rel="stylesheet" href="fonts/fonts.css" />
        {props.headComponents}
      </head>

      <body {...props.bodyAttributes} style={{ overflowX: 'hidden' }}>
        <noscript>
          Umm, sorry. But my website works best when you have Javascript turned
          on. You've got it turned off! Flip the switch for the best experience.
          - Jacob D. Castro
        </noscript>
        {props.preBodyComponents}
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
