'use strict';

// foreign modules

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

// local modules

import CLASSES from '../../lib/values/classes';

// this module

const BAR_PROPS = {
  low: 50,
  max: 100,
  min: 0
};

class HealthBar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { hp, unitClass: klass } = this.props;
    let className = classNames('HealthBar', {
      [`HealthBar--${klass}`]: !!klass
    });
    return (
      <progress className={className} {...BAR_PROPS} value={hp}></progress>
    );
  }
  // we should be using <meter {...BAR_PROPS} value={this.props.hp}></meter>
  // but Safari doesn't support it, and it can't be styled
}

HealthBar.propTypes = {
  hp: PropTypes.number,
  unitClass: PropTypes.oneOf(CLASSES)
};
HealthBar.defaultProps = {
  hp: 0
};

export default HealthBar;
