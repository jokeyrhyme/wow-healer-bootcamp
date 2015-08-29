'use strict';

// foreign modules

import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

// local modules

import CastBar from '../CastBar';
import * as spells from '../../lib/game/spells';

// this module

class Player extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { isCasting, name, spell } = this.props.player;
    return (
      <div className='Player'>
        <h1 className='Player__Name'>{name}</h1>
        <div className='Player__CastBar'>
          { spell ? <CastBar spell={spell} /> : null }
        </div>
        <div className='Player__Spells'>

        { Object.keys(spells).map((spellId) => {
          let props = {
            className: classNames('Player__Spell', {
              'Player__Spell--disabled': isCasting
            }),
            disabled: isCasting,
            key: spellId,
            onClick: () => { this.props.onSpellClick(spellId); }
          };
          return <button {...props}>{spellId}</button>;
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
    name: PropTypes.string,
    spell: PropTypes.object
  })
};
Player.defaultProps = {};

export default Player;
