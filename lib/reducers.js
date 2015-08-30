'use strict';

// foreign modules

import { fromJS, List, Map } from 'immutable';

// local modules

import {
  DAMAGE_ENEMY, HEAL_ENEMY,
  DAMAGE_RANDOM, DAMAGE_UNIT, GROUP_ADD_UNIT, HEAL_RANDOM,
  CAST_SPELL, STOP_CASTING, TARGET_UNIT,
  HEAL_UNIT
} from './values/actions';
import combineReducers from '../utils/combineReducers';
import { toIndex as randomIndex } from '../utils/random';
import * as spells from './game/spells';

// this module

function enemies (state = new List(), action) {
  if (action.type === DAMAGE_ENEMY) {
    let { damage, index } = action.payload;
    let oldHp = state.getIn([ index, 'hp' ]);
    if (oldHp === 0) {
      return state;
    }
    let newHp = Math.max(oldHp -= damage, 0);
    return state.setIn([ index, 'hp' ], newHp);
  }
  if (action.type === HEAL_ENEMY) {
    let { health, index } = action.payload;
    let oldHp = state.getIn([ index, 'hp' ]);
    if (oldHp === 0) {
      return state;
    }
    let newHp = Math.min(oldHp += health, 100);
    return state.setIn([ index, 'hp' ], newHp);
  }
  return state;
}

function group (state = new List(), action) {
  if (action.type === DAMAGE_RANDOM) {
    let index = randomIndex(state);
    let oldHp = state.getIn([ index, 'hp' ]);
    let newHp = Math.max(oldHp -= 20, 0);
    return state.setIn([ index, 'hp' ], newHp);
  }
  if (action.type === DAMAGE_UNIT) {
    let { damage, index } = action.payload;
    let oldHp = state.getIn([ index, 'hp' ]);
    let newHp = Math.max(oldHp -= damage, 0);
    return state.setIn([ index, 'hp' ], newHp);
  }
  if (action.type === HEAL_RANDOM) {
    let index = randomIndex(state);
    let oldHp = state.getIn([ index, 'hp' ]);
    if (oldHp === 0) {
      return state;
    }
    let newHp = Math.min(oldHp += 20, 100);
    return state.setIn([ index, 'hp' ], newHp);
  }
  if (action.type === GROUP_ADD_UNIT) {
    return state.push(fromJS({ hp: 100, role: action.payload.role }));
  }
  return state;
}

function player (state = new Map(), action) {
  if (action.type === CAST_SPELL) {
    if (state.get('isCasting')) {
      return state;
    }
    return state.withMutations(map => {
      map.set('isCasting', true);
      map.set('spell', spells[action.payload.spellId]);
    });
  }
  if (action.type === STOP_CASTING) {
    return state.withMutations(map => {
      map.set('isCasting', false);
      map.delete('spell');
    });
  }
  if (action.type === TARGET_UNIT) {
    return state.withMutations(map => {
      map.set('target', action.payload.index);
    });
  }
  return state;
}

function ui (state = new Map(), action) {
  return state;
}

function spellEffects (state = new Map(), action) {
  if (action.type === HEAL_UNIT) {
    let { health, index } = action.payload;
    let oldHp = state.getIn([ 'group', index, 'hp' ]);
    if (oldHp === 0) {
      return state;
    }
    let newHp = Math.min(oldHp += health, 100);
    return state.setIn([ 'group', index, 'hp' ], newHp);
  }
  return state;
}

const rootReducer = combineReducers({
  enemies,
  group,
  player,
  ui
}, spellEffects);

export default rootReducer;
