import React from 'react';
import PropTypes from 'prop-types';

const ProjectListing = () => {
  return (
    <div className="projectListing">
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

ProjectListing.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectListing;
