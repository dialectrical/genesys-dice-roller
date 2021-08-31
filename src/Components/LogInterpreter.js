import React from "react";
import RollLog from "./RollLog";
import { DICE_NAMES, RESULT_NAMES } from "./Constants";

export const LogInterpreter = (amount, log) => {
  let baseLog = RollLog(amount, log);
  return baseLog.map(x => {
    if (baseLog[baseLog.indexOf(x)]) {
      return baseLog[baseLog.indexOf(x)].map(y => {
        return (
          <p>
            {DICE_NAMES[baseLog.indexOf(x)]}: {RESULT_NAMES[y]}
          </p>
        );
      });
    }
  });
};

export default LogInterpreter;
