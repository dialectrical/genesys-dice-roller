export const DICE_MATRIX = [
  [12, 12, 0, 6, 7, 1], //Boost die (d6)
  [12, 12, 3, 3, 4, 4], //Setback die (d6)
  [12, 0, 0, 8, 1, 1, 6, 7], //Ability die (d8)
  [12, 3, 9, 4, 4, 4, 10, 11], //Difficulty die (d8)
  [12, 0, 0, 8, 8, 1, 6, 6, 6, 7, 7, 2], //Proficiency die (d12)
  [12, 3, 3, 9, 9, 4, 4, 11, 11, 10, 10, 5] //Challenge die (d12)
];
export const DICE_NAMES = [
  "Boost",
  "Setback",
  "Ability",
  "Difficulty",
  "Proficiency",
  "Challenge"
];

export const RESULT_NAMES = [
  "Success",
  "Advantage",
  "Triumph",
  "Failure",
  "Threat",
  "Despair",
  "Success and Advantage",
  "Advantage and Advantage",
  "Success and Success",
  "Failure and Failure",
  "Threat and Threat",
  "Threat and Failure"
];

export default { DICE_MATRIX, DICE_NAMES, RESULT_NAMES };
