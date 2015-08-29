'use strict';

// foreign modules

import { fromJS } from 'immutable';

// this module

let state = {
  group: [],
  player: {
    isCasting: false,
    name: 'ProHealBotLolz',
    target: 0
  },
  ui: {}
};

export default fromJS(state);
