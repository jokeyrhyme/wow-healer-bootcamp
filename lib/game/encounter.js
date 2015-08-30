'use strict';

// local modules

import CLASSES, { TANKS, HEALERS } from '../values/classes';
import { HEALER, DPS, TANK } from '../values/roles';
import { damageEnemy, damageUnit, groupAddUnit } from '../actions';
import {
  toBoolean as randomBoolean,
  toNumber as randomNumber,
  toIndex as randomIndex
} from '../../utils/random';

// this module

const PARTY = 5;
const RAID_MIN = 10;
const RAID_MAX = 15;

function repeat (fn, times) {
  while (times > 0) {
    fn();
    times -= 1;
  }
}

function getRandomClass (role = DPS) {
  if (role === TANK) {
    return TANKS[randomIndex(TANKS)];
  }
  if (role === HEALER) {
    return HEALERS[randomIndex(HEALERS)];
  }
  return CLASSES[randomIndex(CLASSES)];
}

function makeRandomGroup (dispatch, size) {
  const TANKS_MIN = Math.floor(size / 5);
  const TANKS_MAX = TANKS_MIN + Math.floor(size / 10);
  const TANKS_NUM = randomNumber(TANKS_MIN, TANKS_MAX);
  repeat(function () {
    dispatch(groupAddUnit(TANK, getRandomClass(TANK)));
  }, TANKS_NUM);

  const HEALERS_MIN = TANKS_MIN;
  const HEALERS_MAX = TANKS_MIN + TANKS_MAX;
  const HEALERS_NUM = randomNumber(HEALERS_MIN, HEALERS_MAX);
  repeat(function () {
    dispatch(groupAddUnit(HEALER, getRandomClass(HEALER)));
  }, HEALERS_NUM);

  repeat(function () {
    dispatch(groupAddUnit(DPS, getRandomClass(DPS)));
  }, size - TANKS_NUM - HEALERS_NUM);
}

function getTankOrRandom (group, living) {
  // find a random living tank
  const TANKS = living.filter(unit => { return unit.role === TANK; });
  if (TANKS.length) {
    return group.indexOf(TANKS[randomIndex(TANKS)]);
  }

  return group.indexOf(living[randomIndex(living)]);
}

function doTurn (dispatch, getState) {
  let state = getState().toJS();
  let { group } = state;
  let living = group.filter(unit => { return unit.hp > 0; });
  if (!living.length) {
    return; // encounter is over, boss wins
  }

  let target = getTankOrRandom(group, living);

  // deal damage to boss, based on living group members
  dispatch(damageEnemy(0, living.length * 0.5));

  let { enemies: [ { hp: bossHp } ] } = state;
  if (bossHp <= 0) {
    return;
  }

  // deal damage, much more if target is not the tank
  dispatch(damageUnit(target, group[target].role === TANK ? 15 : 45));

  setTimeout(() => { doTurn(dispatch, getState); }, 1e3);
}

export default function (dispatch, getState) {
  let groupSize = randomBoolean() ? PARTY : randomNumber(RAID_MIN, RAID_MAX);
  makeRandomGroup(dispatch, groupSize);

  setTimeout(() => { doTurn(dispatch, getState); }, 1e3);
}
