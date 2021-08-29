import { RESULT_NAMES } from "./Constants.js";

export const OutcomeTally = arr => {
  let i = -1;
  let v = -1;
  let arr1 = arr.slice(0, 3);
  let arr2 = arr.slice(3);
  let tally = arr1.map(x => {
    i++;
    return x - arr2[i];
  });
  let display = tally.map(x => {
    if (x > 0) {
      v++;
      return (
        <div>
          {RESULT_NAMES[v]}: {x}
        </div>
      );
    } else if (x < 0) {
      v++;
      return (
        <div>
          {RESULT_NAMES[v + 3]}: {Math.abs(x)}
        </div>
      );
    }
  });
  return display;
};

export default OutcomeTally;
