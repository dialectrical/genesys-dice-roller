import { RESULT_NAMES } from "./Constants.js";
import Grid from "@material-ui/core/Grid";
import { StyledOutcomeGrid } from "./Styles/StyledOutcomeGrid";
import { StyledOutcomeCard } from "./Styles/StyledOutcomeCard";
import { StyledOutcomeTypography } from "./Styles/StyledOutcomeTypography";
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
        <StyledOutcomeGrid item xs={4} lg={4}>
          <StyledOutcomeCard raised>
            <CardContent>
              <StyledOutcomeTypography color="textPrimary" align="center">
                {RESULT_NAMES[v]}
              </StyledOutcomeTypography>
              <StyledOutcomeTypography align="center">
                {x}
              </StyledOutcomeTypography>
            </CardContent>
          </StyledOutcomeCard>
        </StyledOutcomeGrid>
      );
    } else if (x < 0) {
      v++;
      return (
        <StyledOutcomeGrid item xs={4} lg={4}>
          <StyledOutcomeCard raised>
            <CardContent>
              <StyledOutcomeTypography color="textPrimary" align="center">
                {RESULT_NAMES[v + 3]}
              </StyledOutcomeTypography>
              <StyledOutcomeTypography align="center">
                {Math.abs(x)}
              </StyledOutcomeTypography>
            </CardContent>
          </StyledOutcomeCard>
        </StyledOutcomeGrid>
      );
    }
  });
  return display;
};

export default OutcomeTally;
