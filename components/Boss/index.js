'use strict';

// foreign modules

import React, { Component, PropTypes } from 'react';

// local modules

import HealthBar from '../HealthBar';

// this module

const PROGRESS_PROPS = {
  className: 'Boss__CastBar',
  max: 100,
  min: 0
};

class Boss extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='Boss'>
        <h1 className='Boss__Name'>Big Scary Dragon</h1>
        <div className='Boss__Health'>
          <HealthBar hp={this.props.hp} />
        </div>
        <progress {...PROGRESS_PROPS} />
      </div>
    );
  }
}

Boss.propTypes = {
  hp: PropTypes.number
};
Boss.defaultProps = {
  hp: 100
};

export default Boss;
