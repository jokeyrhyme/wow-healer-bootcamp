'use strict';

// foreign modules

import React, { Component, PropTypes } from 'react';

// this module

const BAR_PROPS = {
  className: 'CastBar',
  max: 100,
  min: 0
};

class CastBar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <progress {...BAR_PROPS} value='' />
    );
  }
}

CastBar.propTypes = {
  hp: PropTypes.number
};
CastBar.defaultProps = {
  hp: 0
};

export default CastBar;
