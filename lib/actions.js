'use strict';

// local modules

import {
  CAST_SPELL, HEAL_RANDOM, DAMAGE_RANDOM, DAMAGE_UNIT, GROUP_ADD_UNIT, SET_TEXT,
  STOP_CASTING, TARGET_UNIT
 } from './values/actions';
import * as spells from './game/spells';

// this module

export function castSpell (spellId) {
  let spell = spells[spellId];
  return function (dispatch) {
    dispatch({
      type: CAST_SPELL,
      payload: { spellId }
    });
    setTimeout(function () {
      dispatch({
        type: STOP_CASTING,
        payload: {}
      });
    }, spell.castTime);
  };
}

export function damageRandom () {
  return {
    type: DAMAGE_RANDOM,
    payload: {}
  };
}

export function damageUnit (index, damage) {
  return {
    type: DAMAGE_UNIT,
    payload: {
      damage,
      index
    }
  };
}

export function healRandom () {
  return {
    type: HEAL_RANDOM,
    payload: {}
  };
}

export function groupAddUnit () {
  return {
    type: GROUP_ADD_UNIT,
    payload: {}
  };
}

export function setText (text = '') {
  return {
    type: SET_TEXT,
    payload: {
      text
    }
  };
}

export function targetUnit (index = 0) {
  return {
    type: TARGET_UNIT,
    payload: {
      index
    }
  };
}
