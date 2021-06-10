export function stringIsNaturalNumber(string) {
  // regex to match positive integer numbers
  //  start - 0 or 1-9 - [0,9] {0,} - end
  return /^(0|[1-9]\d*)$/.test(string);
}
