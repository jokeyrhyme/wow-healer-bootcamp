'use strict';

// foreign modules

import React, { Component, PropTypes } from 'react';

// local modules

import HealthBar from '../HealthBar';

// this module

class Unit extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='Unit'>
        <div className='Unit__Health'>
          <HealthBar hp={this.props.unit.hp} />
        </div>
      </div>
    );
  }
}

Unit.propTypes = {
  unit: PropTypes.shape({
    hp: PropTypes.number
  })
};
Unit.defaultProps = {
  unit: {
    hp: 0
  }
};

export default Unit;
