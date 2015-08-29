'use strict';

// foreign modules

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

// local modules

import CastBar from '../CastBar';

// this module

class Player extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    global.console.log('Player#render()...');
    let { isCasting, name } = this.props.player;
    return (
      <div className='Player'>
        <h1 className='Player__Name'>{name}</h1>
        <div className='Player__CastBar'>
          <CastBar />
        </div>
        <div className='Player__Spells'>

        { ['Q', 'W', 'E', 'R'].map((label) => {
          let props = {
            className: classNames('Player__Spell', {
              'Player__Spell--disabled': isCasting
            }),
            disabled: isCasting,
            key: label,
            onClick: this.props.onSpellClick
          };
          return <button {...props}>{label}</button>;
        }) }
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  onSpellClick: PropTypes.func.isRequired,
  player: PropTypes.shape({
    isCasting: PropTypes.boolean,
    name: PropTypes.string
  })
};
Player.defaultProps = {};

export default Player;
