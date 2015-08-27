'use strict';

// foreign modules

import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

// local modules

import Boss from '../../components/Boss';
import Player from '../../components/Player';
import Unit from '../../components/Unit';

// this module

class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <main className='App'>
        <section className='Team Team--Enemies'>
          <h1 className='Team__Name'>Enemies</h1>
          <Boss />
          { this.props.group.map(function (unit, index) {
            return <Unit key={index} unit={unit} />;
          }) }
        </section>
        <section className='Team Team--Friendlies'>
          <h1 className='Team__Name'>Friendlies</h1>
          { this.props.group.map(function (unit, index) {
            return <Unit key={index} unit={unit} />;
          }) }
          <Player />
        </section>
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
