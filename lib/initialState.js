'use strict';

// foreign modules

import { fromJS } from 'immutable';

// this module

let state = {
  group: [],
  player: {
    isCasting: false,
    name: 'ProHealBotLolz'
  },
  ui: {}
};

export default fromJS(state);
