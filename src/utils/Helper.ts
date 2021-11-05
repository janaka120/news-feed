const NUMBER_UNITS: Array<string> = [
  'Zero',
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
  'Sixth',
  'Seventh',
  'Eighth',
  'Ninth',
  'Tenth',
  'Eleventh',
  'Twelfth',
  'Thirteenth',
  'Fourteenth',
  'Fifteenth',
  'Sixteenth',
  'Seventeenth',
  'Eighteenth',
  'Nineteenth',
  'Twentieth',
];

export const convertNumberToWord = (count: number): string => {
  return NUMBER_UNITS[count];
};

// Generate a random number in between given MIN and MIX numbers
export const generateNumberInBetween = (min: number, max: number): number => {
  return Math.floor(Math.random() * max) + min;
};
