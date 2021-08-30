import { React, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { DICE_MATRIX, DICE_NAMES } from "./Components/Constants.js";
import OutcomeTally from "./Components/Outcome.js";
import AmountSetter from "./Components/AmountSetter.js";
import ResultSetter from "./Components/ResultSetter";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: "100px 640px 100px 640px",
    padding: "0px 20px 0px 20px"
  }
});

export const App = () => {
  const [rollAmount, setRollAmount] = useState([0, 0, 0, 0, 0, 0]);
  const [result, setResult] = useState();
  const classes = useStyles();

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
    <CssBaseline>
      <Paper elevation={6} classes={{ root: classes.root }}>
        <Grid
          container
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid item md="auto" direciton="column">
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
                      <Typography color="textPrimary">
                        {rollAmount[DICE_MATRIX.indexOf(x)]}
                      </Typography>
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
            spacing={4}
            alignItems="center"
            justifyContent="space-evenly"
            direction="row"
            lg={9}
            xs={9}
            sm={9}
          >
            {result ? OutcomeTally(result) : ""}
          </Grid>
        </Grid>
      </Paper>
    </CssBaseline>
  );
};

export default App;
