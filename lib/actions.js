'use strict';

// local modules

import {
  CAST_SPELL, HEAL_RANDOM, DAMAGE_RANDOM, GROUP_ADD_MEMBER, SET_TEXT, STOP_CASTING
 } from './values/actions';

// this module

export function castSpell () {
  return function (dispatch) {
    dispatch({
      type: CAST_SPELL,
      payload: {}
    });
    setTimeout(function () {
      dispatch({
        type: STOP_CASTING,
        payload: {}
      });
    }, 2e3);
  };
}

export function damageRandom () {
  return {
    type: DAMAGE_RANDOM,
    payload: {}
  };
}

export function healRandom () {
  return {
    type: HEAL_RANDOM,
    payload: {}
  };
}

export function groupAddMember () {
  return {
    type: GROUP_ADD_MEMBER,
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
