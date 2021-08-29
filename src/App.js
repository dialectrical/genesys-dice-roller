import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  DICE_MATRIX,
  DICE_NAMES,
  RESULT_NAMES
} from "./Components/Constants.js";
import OutComeTally from "./Components/Outcome.js";

export const App = () => {
  const [rollAmount, setRollAmount] = useState([0, 0, 0, 0, 0, 0]);
  const [result, setResult] = useState([0, 0, 0, 0, 0, 0]);

  const handleChange = event => {
    let die = event.target.id;
    let newAmount = [...rollAmount];
    if (event.target.value == 1 && newAmount[die] < 5) {
      let increment = newAmount[die] + 1;
      newAmount.splice(die, 1, increment);
      setRollAmount(newAmount);
    } else if (event.target.value == -1 && newAmount[die] > 0) {
      newAmount.splice(die, 1, newAmount[die] - 1);
      setRollAmount(newAmount);
    }
  };

  const handleRoll = event => {
    let i = 0;
    let results = [0, 0, 0, 0, 0, 0];
    rollAmount.map(x => {
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
    });
    setResult(results);
    return setResult(results);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      spacing={10}
      alignItems="center"
    >
      <Grid item direciton="column" xs={12} sm={6}>
        {DICE_MATRIX.map(x => {
          return (
            <Grid item>
              <h2 className={DICE_NAMES[DICE_MATRIX.indexOf(x)]}>
                {DICE_NAMES[DICE_MATRIX.indexOf(x)]}
              </h2>
              <button
                value={-1}
                id={DICE_MATRIX.indexOf(x)}
                onClick={handleChange}
              >
                -
              </button>
              {rollAmount[DICE_MATRIX.indexOf(x)]}
              <button
                value={1}
                id={DICE_MATRIX.indexOf(x)}
                onClick={handleChange}
              >
                +
              </button>
            </Grid>
          );
        })}
        <button onClick={handleRoll}>Roll</button>
      </Grid>
      <Grid item xs={12} sm={6}>
        {result ? result.map(x => <p>{x}</p>) : ""}
        {result ? OutComeTally(result) : ""}
      </Grid>
    </Grid>
  );
};

export default App;
