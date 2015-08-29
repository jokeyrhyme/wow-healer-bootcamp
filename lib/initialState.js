'use strict';

// foreign modules

import { fromJS } from 'immutable';

// this module

let state = {
  enemies: [
    {
      hp: 100,
      name: 'Big Scary Dragon'
    }
  ],
  group: [],
  player: {
    isCasting: false,
    name: 'ProHealBotLolz',
    target: 0
  },
  ui: {}
};

export default fromJS(state);
