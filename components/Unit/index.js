'use strict';

// foreign modules

import React, { Component, PropTypes } from 'react';

// this module

const METER_PROPS = {
  className: 'Unit__Health',
  low: 50,
  max: 100,
  min: 0
};

class Unit extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='Unit'>
        <meter {...METER_PROPS} value={this.props.unit.hp} />
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
