'use strict';

// local modules

import {
  CAST_SPELL, STOP_CASTING,
  DAMAGE_ENEMY, DAMAGE_RANDOM, DAMAGE_UNIT,
  HEAL_ENEMY, HEAL_RANDOM, HEAL_UNIT,
  GROUP_ADD_UNIT, SET_TEXT, TARGET_UNIT
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
      spell.effect(dispatch);
    }, spell.castTime);
  };
}

export function damageEnemy (index = 0, damage) {
  return {
    type: DAMAGE_ENEMY,
    payload: {
      damage,
      index
    }
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

export function healEnemy (index = 0, damage) {
  return {
    type: HEAL_ENEMY,
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

export function healUnit (index, health) {
  return {
    type: HEAL_UNIT,
    payload: {
      health,
      index
    }
  };
}

export function groupAddUnit (role) {
  return {
    type: GROUP_ADD_UNIT,
    payload: {
      role
    }
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
