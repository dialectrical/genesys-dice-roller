import { DICE_MATRIX } from "./Constants.js";

export const ResultSetter = (amount, func) => {
  let i = 0;
  let results = [0, 0, 0, 0, 0, 0];
  amount.map(x => {
    if (x > 0) {
      for (let l = 0; l < x; l++) {
        let roll =
          DICE_MATRIX[i][Math.floor(Math.random() * DICE_MATRIX[i].length)];
        let total = results[roll] + 1;
        if (roll == 12) {
        } else if (roll == 6) {
          results.splice(0, 1, results[0] + 1);
          results.splice(1, 1, results[1] + 1);
        } else if (roll == 7) {
          results.splice(1, 1, results[1] + 2);
        } else if (roll == 8) {
          results.splice(0, 1, results[0] + 2);
        } else if (roll == 9) {
          results.splice(3, 1, results[3] + 2);
        } else if (roll == 10) {
          results.splice(4, 1, results[4] + 2);
        } else if (roll == 11) {
          results.splice(4, 1, results[4] + 1);
          results.splice(5, 1, results[5] + 1);
        } else {
          results.splice(roll, 1, total);
        }
      }
      i++;
    } else {
      i++;
      return 0;
    }
  }, []);
  func(results);
  return func(results);
};

export default ResultSetter;
