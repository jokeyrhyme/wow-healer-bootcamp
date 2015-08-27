'use strict';

// foreign modules

import React, { Component } from 'react';

// this module

const PROGRESS_PROPS = {
  className: 'Player__CastBar',
  max: 100,
  min: 0
};

class Player extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='Player'>
        <h1 className='Player__Name'>ProHealBotLolz</h1>
        <progress {...PROGRESS_PROPS} />
        <button className='Player__Spell'>Q</button>
        <button className='Player__Spell'>W</button>
        <button className='Player__Spell'>E</button>
        <button className='Player__Spell'>R</button>
      </div>
    );
  }
}

Player.propTypes = {};
Player.defaultProps = {};

export default Player;
