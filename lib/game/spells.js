'use strict';

// local modules

import { healUnit } from '../../lib/actions';

// this module

export const Q = {
  castTime: 2e3,
  effect (dispatch) {
    dispatch(healUnit(null, 50));
  }
};

export const W = {
  castTime: 3e3,
  effect (dispatch) {
    dispatch(healUnit(null, 60));
  }
};

export const E = {
  castTime: 4e3,
  effect (dispatch) {
    dispatch(healUnit(null, 70));
  }
};

export const R = {
  castTime: 5e3,
  effect (dispatch) {
    dispatch(healUnit(null, 80));
  }
};
