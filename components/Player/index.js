'use strict';

// foreign modules

import React, { Component } from 'react';

// local modules

import CastBar from '../CastBar';

// this module

class Player extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='Player'>
        <h1 className='Player__Name'>ProHealBotLolz</h1>
        <div className='Player__CastBar'>
          <CastBar />
        </div>
        <div className='Player__Spells'>
          <button className='Player__Spell'>Q</button>
          <button className='Player__Spell'>W</button>
          <button className='Player__Spell'>E</button>
          <button className='Player__Spell'>R</button>
        </div>
      </div>
    );
  }
}

Player.propTypes = {};
Player.defaultProps = {};

export default Player;
