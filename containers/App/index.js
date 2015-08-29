'use strict';

// foreign modules

import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

// local modules

import { castSpell } from '../../lib/actions';
import Boss from '../../components/Boss';
import Player from '../../components/Player';
import Unit from '../../components/Unit';

// this module

class App extends Component {
  constructor (props) {
    super(props);

    this.handleSpellClick = this.handleSpellClick.bind(this);
  }

  handleSpellClick () {
    global.console.log('handleSpellClick...');
    this.props.dispatch(castSpell());
  }

  render () {
    return (
      <main className='App'>
        <section className='Team Team--Enemies'>
          <Boss />
        </section>
        <section className='Team Team--Friendlies'>
          { this.props.group.map(function (unit, index) {
            return <Unit key={index} unit={unit} />;
          }) }
          <Player player={this.props.player} onSpellClick={this.handleSpellClick} />
        </section>
      </main>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  group: PropTypes.arrayOf(PropTypes.object),
  player: PropTypes.object,
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
