import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import OutcomeTally from "./Components/Outcome.js";
import Roller from "./Components/ResultSetter";
import AmountButtons from "./Components/AmountButtons.js";

const useStyles = makeStyles({
  root: {
    margin: "100px 640px 100px 640px",
    padding: "0px 20px 0px 20px"
  }
});

export const App = () => {
  const [rollAmount, setRollAmount] = useState([0, 0, 0, 0, 0, 0]);
  const [result, setResult] = useState([0, 0, 0, 0, 0, 0]);
  const classes = useStyles();

  return (
    <Paper elevation={6} classes={{ root: classes.root }}>
      <Grid container direction="row" spacing={3} alignItems="flex-start">
        <Grid container item lg={4} direction="row">
          <Grid item>{AmountButtons(rollAmount, setRollAmount)}</Grid>
          <Grid item>{Roller(rollAmount, setResult)}</Grid>
        </Grid>
        <Grid container item lg={8} spacing={3} alignContent="space-around">
          {OutcomeTally(result)}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default App;
