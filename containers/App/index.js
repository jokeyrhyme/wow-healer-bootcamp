'use strict';

// foreign modules

import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

// local modules

import Unit from '../../components/Unit';

// this module

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <main>
        { this.props.group.map(function (unit, index) {
          return <Unit key={index} unit={unit} />;
        }) }
      </main>
    );
  }
}

App.propTypes = {
  group: PropTypes.arrayOf(PropTypes.object),
  ui: PropTypes.object
};
App.defaultProps = {};

/**
provide a state suitable for use here
@private
*/
function mapStateToProps (state) {
  return state.toJS();
}

export default connect(mapStateToProps)(App);
