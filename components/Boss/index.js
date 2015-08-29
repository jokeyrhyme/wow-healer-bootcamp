'use strict';

// foreign modules

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
    return (
      <div className='Boss'>
        <h1 className='Boss__Name'>Big Scary Dragon</h1>
        <div className='Boss__Health'>
          <HealthBar hp={this.props.hp} />
        </div>
        <div className='Boss__CastBar'>
          <CastBar />
        </div>
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
