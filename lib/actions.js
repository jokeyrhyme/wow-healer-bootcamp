'use strict';

// local modules

import { HEAL_RANDOM, DAMAGE_RANDOM, GROUP_ADD_MEMBER, SET_TEXT } from './values/actions';

// this module

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
