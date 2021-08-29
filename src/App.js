import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { DICE_MATRIX, DICE_NAMES } from "./Components/Constants.js";
import OutComeTally from "./Components/Outcome.js";
import AmountSetter from "./Components/AmountSetter.js";
import ResultSetter from "./Components/ResultSetter";

export const App = () => {
  const [rollAmount, setRollAmount] = useState([0, 0, 0, 0, 0, 0]);
  const [result, setResult] = useState();

  const handleChange = event => {
    AmountSetter(
      event.currentTarget.id,
      event.currentTarget.value,
      rollAmount,
      setRollAmount
    );
  };

  const handleRoll = event => {
    ResultSetter(rollAmount, setResult);
  };

  return (
    <Grid container direction="row" spacing={6} alignItems="center">
      <Grid item direciton="column" xs={6} sm={3}>
        {DICE_MATRIX.map(x => {
          return (
            <Grid item>
              <h2 className={DICE_NAMES[DICE_MATRIX.indexOf(x)]}>
                {DICE_NAMES[DICE_MATRIX.indexOf(x)]}
              </h2>
              <ButtonGroup size="large" variant="contained" color="primary">
                <Button
                  value={-1}
                  id={DICE_MATRIX.indexOf(x)}
                  onClick={handleChange}
                >
                  -
                </Button>
                <Button disabled variant="outlined">
                  {rollAmount[DICE_MATRIX.indexOf(x)]}
                </Button>
                <Button
                  value={1}
                  id={DICE_MATRIX.indexOf(x)}
                  onClick={handleChange}
                >
                  +
                </Button>
              </ButtonGroup>
            </Grid>
          );
        })}
        <Grid item>
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={handleRoll}
          >
            Roll
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justifyContent="flex-start"
        xs={6}
        sm={9}
      >
        {result ? OutComeTally(result) : ""}
      </Grid>
    </Grid>
  );
};

export default App;
