'use strict';

/**
@param {Object} reducers
@returns {Function}
*/
export default function (reducers = {}) {
  return function (state = new Map(), action) {
    return Object.keys(reducers).reduce((prev, current, index) => {
      let reducer = reducers[current];
      return prev.set(current, reducer(prev, action));
    }, state);
  };
}
