import React from "react";
import { DICE_NAMES, RESULT_NAMES } from "./Constants";

export const RollLog = (amount, log) => {
  let i = -1;
  let displayLog = [[], [], [], [], [], []];
  amount.map(x => {
    i++;
    for (let l = 0; l < x; l++) {
      displayLog[i].push(log[l]);
    }
  });
  return displayLog;
};

export default RollLog;
