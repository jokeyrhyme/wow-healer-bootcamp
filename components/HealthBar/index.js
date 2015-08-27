'use strict';

// foreign modules

import React, { Component, PropTypes } from 'react';

// this module

const METER_PROPS = {
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
      <meter {...METER_PROPS} value={this.props.hp} />
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
