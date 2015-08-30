'use strict';

// foreign modules

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

// local modules

import CastBar from '../CastBar';
import HealthBar from '../HealthBar';

// this module

class Boss extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { hp } = this.props.unit;
    let props = {
      className: classNames('Boss', {
        'Boss--dead': hp <= 0
      })
    };
    return (
      <div {...props}>
        <h1 className='Boss__Name'>Big Scary Dragon</h1>
        <div className='Boss__Health'>
          { hp > 0 ? <HealthBar hp={hp} /> : null }
        </div>
        <div className='Boss__CastBar'>
          <CastBar />
        </div>
      </div>
    );
  }
}

Boss.propTypes = {
  unit: PropTypes.shape({
    hp: PropTypes.number
  })
};
Boss.defaultProps = {
  unit: {
    hp: 100
  }
};

export default Boss;
