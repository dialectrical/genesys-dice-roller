import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { StyledPaper } from "./Components/Styles/StyledPaper";
import OutcomeTally from "./Components/Outcome";
import Roller from "./Components/ResultSetter";
import AmountButtons from "./Components/AmountButtons";
import LogInterpreter from "./Components/LogInterpreter";

export const App = () => {
  const [rollAmount, setRollAmount] = useState([0, 0, 0, 0, 0, 0]);
  const [rolledAmount, setRolledAmount] = useState();
  const [result, setResult] = useState([0, 0, 0, 0, 0, 0]);
  const [rollLog, setRollLog] = useState();

  return (
    <StyledPaper elevation={6}>
      <Grid container direction="row" spacing={3} alignItems="flex-start">
        <Grid container item xs={4} lg={4} direction="row">
          <Grid item>{AmountButtons(rollAmount, setRollAmount)}</Grid>
          <Grid item>
            {Roller(rollAmount, setResult, setRollLog, setRolledAmount)}
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={8}
          lg={8}
          spacing={1}
          alignContent="space-around"
        >
          {OutcomeTally(result)}
          <Grid item xs={8} lg={12}>
            {LogInterpreter(rolledAmount, rollLog)}
          </Grid>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default App;
