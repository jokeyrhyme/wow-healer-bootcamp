/* eslint-disable no-console */ // still experimenting, relax!

'use strict';

// foreign modules

import { Provider } from 'react-redux';
import React, { Component } from 'react';

// local modules

import App from '../App';
import { default as configureStore } from '../../lib/configureStore';
import initialState from '../../lib/initialState';
import { damageRandom, healRandom, populateGroup } from '../../lib/actions';

// this module

const store = configureStore(initialState);

store.dispatch(populateGroup());

setInterval(function () {
  store.dispatch(healRandom());
  store.dispatch(damageRandom());
}, 1e3);

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}
