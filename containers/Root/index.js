/* eslint-disable no-console */ // still experimenting, relax!

'use strict';

// foreign modules

import { Provider } from 'react-redux';
import React, { Component } from 'react';

// local modules

import App from '../App';
import { default as configureStore } from '../../lib/configureStore';
import encounter from '../../lib/game/encounter';
import initialState from '../../lib/initialState';
// import { damageRandom } from '../../lib/actions';

// this module

const store = configureStore(initialState);

encounter(store.dispatch.bind(store), store.getState.bind(store));

// setInterval(function () {
//   store.dispatch(damageRandom());
// }, 1e3);

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}
