'use strict';

// foreign modules

import { fromJS, List, Map } from 'immutable';

// local modules

import { HEAL_RANDOM, DAMAGE_RANDOM, POPULATE_GROUP } from './values/actions';
import combineReducers from '../utils/combineReducers';

function randomIndex (set) {
  return Math.floor(Math.random() * set.size);
}

// this module

function group (state = new List(), action) {
  if (action.type === DAMAGE_RANDOM) {
    let index = randomIndex(state);
    let unit = state.get(index).toJS();
    let newHp = Math.max(unit.hp -= 20, 0);
    return state.set(index, fromJS({ hp: newHp }));
  }
  if (action.type === HEAL_RANDOM) {
    let index = randomIndex(state);
    let unit = state.get(index).toJS();
    let newHp = Math.min(unit.hp += 20, 100);
    return state.set(index, fromJS({ hp: newHp }));
  }
  if (action.type === POPULATE_GROUP) {
    return fromJS([ { hp: 100 }, { hp: 80 }, { hp: 60 }, { hp: 40 }, { hp: 20 } ]);
  }
  return state;
}

function ui (state = new Map(), action) {
  return state;
}

const rootReducer = combineReducers({
  group,
  ui
});

export default rootReducer;
