'use strict';

// foreign modules

import React, { Component, PropTypes } from 'react';

// this module

const BAR_PROPS = {
  className: 'HealthBar',
  low: 50,
  max: 100,
  min: 0
};

class HealthBar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <meter {...BAR_PROPS} value={this.props.hp}></meter>
    );
  }
}

HealthBar.propTypes = {
  hp: PropTypes.number
};
HealthBar.defaultProps = {
  hp: 0
};

export default HealthBar;
