import React from 'react';
import { FilterContext } from './index';

// ? provider component wraps entire app in gatsby-(browser|node).js
class FilterContextWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFilterItem = item => {
      this.setState({
        [item]: ![item],
      });
    };

    this.state = {
      filterIsActive: false,
      toggleFilterItem: this.toggleFilterItem,
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
    };
  }

  render() {
    return (
      <FilterContext.Provider value={this.state}>
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}

export default FilterContextWrapper;
