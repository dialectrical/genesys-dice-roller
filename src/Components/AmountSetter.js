export const AmountSetter = (id, value, amount, func) => {
  let die = id;
  let newAmount = [...amount];
  if (value == 1 && newAmount[die] < 5) {
    let increment = newAmount[die] + 1;
    newAmount.splice(die, 1, increment);
    func(newAmount);
  } else if (value == -1 && newAmount[die] > 0) {
    newAmount.splice(die, 1, newAmount[die] - 1);
    func(newAmount);
  }
};

export default AmountSetter;
