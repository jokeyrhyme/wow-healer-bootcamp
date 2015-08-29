'use strict';

// local modules

import { groupAddMember } from '../../lib/actions';
import { toNumber as randomNumber } from '../../utils/random';
import { toBoolean as randomBoolean } from '../../utils/random';

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

export default function (dispatch, getState) {
  let membersCount = randomBoolean() ? PARTY : randomNumber(RAID_MIN, RAID_MAX);
  repeat(function () {
    dispatch(groupAddMember());
  }, membersCount);
}
