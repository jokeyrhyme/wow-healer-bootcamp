'use strict';

// foreign modules

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

// local modules

import HealthBar from '../HealthBar';

// this module

class Unit extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let props = {
      className: classNames('Unit', {
        'Unit--target': this.props.isTarget
      }),
      onClick: this.props.onClick
    };
    return (
      <div {...props}>
        <div className='Unit__Health'>
          <HealthBar hp={this.props.unit.hp} />
        </div>
      </div>
    );
  }
}

Unit.propTypes = {
  isTarget: PropTypes.boolean,
  onClick: PropTypes.func,
  unit: PropTypes.shape({
    hp: PropTypes.number
  })
};
Unit.defaultProps = {
  isTarget: false,
  unit: {
    hp: 0
  }
};

export default Unit;
