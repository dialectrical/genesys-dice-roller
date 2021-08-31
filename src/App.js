import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import OutcomeTally from "./Components/Outcome.js";
import ResultSetter from "./Components/ResultSetter";
import AmountButtons from "./Components/AmountButtons.js";

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

  return (
    <Paper elevation={6} classes={{ root: classes.root }}>
      <Grid
        container
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid item direciton="column">
          <Grid item>{AmountButtons(rollAmount, setRollAmount)}</Grid>
          <Grid item>{ResultSetter(rollAmount, setResult)}</Grid>
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
  );
};

export default App;
