import React from "react";
import RollLog from "./RollLog";
import { DICE_NAMES, RESULT_NAMES } from "./Constants";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { StyledLogCard } from "./Styles/StyledLogCard";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  container: {
    height: 300,
    width: "100%"
  }
});

export const LogInterpreter = (amount, log) => {
  const classes = useStyles();
  if (amount) {
    let baseLog = RollLog(amount, log);
    let logContents = baseLog.map(x => {
      if (baseLog[baseLog.indexOf(x)]) {
        return baseLog[baseLog.indexOf(x)].map(y => {
          return (
            <TableRow>
              <TableCell>{DICE_NAMES[baseLog.indexOf(x)]}</TableCell>
              <TableCell align="right">{RESULT_NAMES[y]}</TableCell>
            </TableRow>
          );
        });
      }
    });
    return (
      <StyledLogCard raised>
        <CardContent>
          <TableContainer components={Paper} className={classes.container}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Dice</TableCell>
                  <TableCell align="right">Results</TableCell>
                </TableRow>
              </TableHead>
              {logContents}
            </Table>
          </TableContainer>
        </CardContent>
      </StyledLogCard>
    );
  }
};

export default LogInterpreter;
