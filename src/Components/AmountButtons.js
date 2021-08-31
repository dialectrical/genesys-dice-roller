import React from "react";
import { DICE_MATRIX, DICE_NAMES } from "./Constants";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";

export const AmountButtons = (arr, func) => {
  const handleChange = event => {
    let newAmount = [...arr];
    if (
      event.currentTarget.value == 1 &&
      newAmount[event.currentTarget.id] < 5
    ) {
      newAmount.splice(
        event.currentTarget.id,
        1,
        newAmount[event.currentTarget.id] + 1
      );
      return func(newAmount);
    } else if (
      event.currentTarget.value == -1 &&
      newAmount[event.currentTarget.id] > 0
    ) {
      newAmount.splice(
        event.currentTarget.id,
        1,
        newAmount[event.currentTarget.id] - 1
      );
      return func(newAmount);
    }
  };

  return DICE_MATRIX.map(x => {
    return (
      <>
        <Typography variant="h5" className={DICE_NAMES[DICE_MATRIX.indexOf(x)]}>
          {DICE_NAMES[DICE_MATRIX.indexOf(x)]}
        </Typography>
        <ButtonGroup size="large" variant="contained" color="primary">
          <Button value={-1} id={DICE_MATRIX.indexOf(x)} onClick={handleChange}>
            -
          </Button>
          <Button disabled variant="outlined">
            <Typography color="textPrimary">
              {arr[DICE_MATRIX.indexOf(x)]}
            </Typography>
          </Button>
          <Button value={1} id={DICE_MATRIX.indexOf(x)} onClick={handleChange}>
            +
          </Button>
        </ButtonGroup>
      </>
    );
  });
};

export default AmountButtons;
