import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  DICE_MATRIX,
  DICE_NAMES,
  RESULT_NAMES
} from "./Components/Constants.js";
import OutComeTally from "./Components/Outcome.js";
import AmountSetter from "./Components/AmountSetter.js";
import ResultSetter from "./Components/ResultSetter";

export const App = () => {
  const [rollAmount, setRollAmount] = useState([0, 0, 0, 0, 0, 0]);
  const [result, setResult] = useState();

  const handleChange = event => {
    AmountSetter(
      event.target.id,
      event.target.value,
      rollAmount,
      setRollAmount
    );
  };

  const handleRoll = event => {
    ResultSetter(rollAmount, setResult);
  };

  return (
    <Grid container direction="row" spacing={12} alignItems="center">
      <Grid item direciton="column" xs={6} sm={3}>
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
      <Grid
        container
        item
        direction="row"
        justifyContent="flex-end"
        item
        xs={6}
        sm={9}
      >
        {result ? OutComeTally(result) : ""}
      </Grid>
    </Grid>
  );
};

export default App;
