import { RESULT_NAMES } from "./Constants.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { StyledOutcomeCard } from "./Styles/StyledOutcomeCard";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "33%"
  }
});

export const OutcomeTally = arr => {
  const classes = useStyles();
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
        <Grid item lg={4} classes={{ root: classes.root }}>
          <StyledOutcomeCard raised>
            <CardContent>
              <Typography color="textPrimary" align="center">
                {RESULT_NAMES[v]}
              </Typography>
              <Typography align="center">{x}</Typography>
            </CardContent>
          </StyledOutcomeCard>
        </Grid>
      );
    } else if (x < 0) {
      v++;
      return (
        <Grid item lg={4} classes={{ root: classes.root }}>
          <StyledOutcomeCard raised>
            <CardContent>
              <Typography color="textPrimary" align="center">
                {RESULT_NAMES[v + 3]}
              </Typography>
              <Typography align="center">{Math.abs(x)}</Typography>
            </CardContent>
          </StyledOutcomeCard>
        </Grid>
      );
    }
  });
  return display;
};

export default OutcomeTally;
