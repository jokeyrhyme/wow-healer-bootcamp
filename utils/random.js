'use strict';

export function toNumber (min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

export function toBoolean () {
  return Math.random() >= 0.5;
}

export function toIndex (array) {
  return toNumber(0, array.length);
}
