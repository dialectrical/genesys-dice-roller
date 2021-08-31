import { RESULT_NAMES } from "./Constants.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
        <Card raised>
          <CardContent>
            <Typography color="textPrimary">{RESULT_NAMES[v]}</Typography>
            <Typography align="center">{x}</Typography>
          </CardContent>
        </Card>
      );
    } else if (x < 0) {
      v++;
      return (
        <Card raised>
          <CardContent>
            <Typography color="textPrimary">{RESULT_NAMES[v + 3]}</Typography>
            <Typography align="center">{Math.abs(x)}</Typography>
          </CardContent>
        </Card>
      );
    }
  });
  return display;
};

export default OutcomeTally;
