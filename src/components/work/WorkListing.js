import React from 'react';
import PropTypes from 'prop-types';

const WorkListing = () => {
  return (
    <div className="workListing">
      <h2>Jamersan LLC. Website</h2>
      <h3>Stack</h3>
      <ul>
        <li>React</li>
        <li>Wordpress</li>
        <li>SASS/SCSS</li>
      </ul>
      <h3>Notable Accomplishments</h3>
      <p>Created a custom Gatsby plugin for a specific use-case.</p>
    </div>
  );
};

WorkListing.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkListing;
