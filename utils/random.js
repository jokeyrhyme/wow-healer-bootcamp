'use strict';

// foreign modules

import { Set } from 'immutable';

// this module

export function toNumber (min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

export function toBoolean () {
  return Math.random() >= 0.5;
}

export function toIndex (values) {
  if (Set.isSet(values)) {
    return toNumber(0, values.size);
  }
  if (Array.isArray(values)) {
    return toNumber(0, values.length);
  }
  return 0;
}
