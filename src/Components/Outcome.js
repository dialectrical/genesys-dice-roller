import { RESULT_NAMES } from "./Constants.js";
import Grid from "@material-ui/core/Grid";

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
    if (x >= 0) {
      v++;
      return (
        <Grid container direction="column" item xs={4} sm={3}>
          <Grid item>
            <h2>{RESULT_NAMES[v]}</h2>
          </Grid>
          <Grid item>
            <h2>{x}</h2>
          </Grid>
        </Grid>
      );
    } else if (x < 0) {
      v++;
      return (
        <Grid container direction="column" item xs={4} sm={3}>
          <Grid item>
            <h2>{RESULT_NAMES[v + 3]}</h2>
          </Grid>{" "}
          <Grid item>
            <h2>{Math.abs(x)}</h2>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container direction="column" item xs={4} sm={3}>
          <Grid item>{""}</Grid>
          <Grid item>{""}</Grid>
        </Grid>
      );
    }
  });
  return display;
};

export default OutcomeTally;
