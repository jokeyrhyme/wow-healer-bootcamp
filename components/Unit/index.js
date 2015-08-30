'use strict';

// foreign modules

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

// local modules

import HealthBar from '../HealthBar';
import { HEALER, DPS, TANK } from '../../lib/values/roles';

// this module

const ROLE_SYMBOLS = {
  [HEALER]: '\u2695',
  [DPS]: '\u2694',
  [TANK]: '\u2602' // umbrella, because shield symbols aren't well supported
};

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
    let { hp, role } = this.props.unit;
    return (
      <div {...props}>
        <div className='Unit__Health'>
          <label className='Unit__Role' title=''>
            {ROLE_SYMBOLS[role] || '?'}
          </label>
          <HealthBar hp={hp} />
        </div>
      </div>
    );
  }
}

Unit.propTypes = {
  isTarget: PropTypes.bool,
  onClick: PropTypes.func,
  unit: PropTypes.shape({
    hp: PropTypes.number,
    role: PropTypes.oneOf(Object.keys(ROLE_SYMBOLS))
  })
};
Unit.defaultProps = {
  isTarget: false,
  unit: {
    hp: 0
  }
};

export default Unit;
