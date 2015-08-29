'use strict';

// local modules

import { damageUnit, groupAddUnit } from '../../lib/actions';
import {
  toBoolean as randomBoolean,
  toNumber as randomNumber,
  toIndex as randomIndex
} from '../../utils/random';

// this module

const PARTY = 5;
const RAID_MIN = 10;
const RAID_MAX = 10;

function repeat (fn, times) {
  while (times > 0) {
    fn();
    times -= 1;
  }
}

function getTankOrRandom (group, living) {
  // for now assume group[0] is the only tank
  if (group[0].hp > 0) {
    return 0;
  }
  return group.indexOf(living[randomIndex(living)]);
}

function doTurn (dispatch, getState) {
  let { group } = getState().toJS();
  let living = group.filter(unit => { return unit.hp > 0; });
  if (!living.length) {
    return; // encounter is over, boss wins
  }

  let target = getTankOrRandom(group, living);

  // deal damage, much more if target is not the tank
  dispatch(damageUnit(target, target === 0 ? 20 : 50));

  setTimeout(() => { doTurn(dispatch, getState); }, 1e3);
}

export default function (dispatch, getState) {
  let membersCount = randomBoolean() ? PARTY : randomNumber(RAID_MIN, RAID_MAX);
  repeat(function () {
    dispatch(groupAddUnit());
  }, membersCount);

  setTimeout(() => { doTurn(dispatch, getState); }, 1e3);
}
