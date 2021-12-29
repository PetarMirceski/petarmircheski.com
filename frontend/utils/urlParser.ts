export const urlParser = (queryString: string): number => {
  // NOTE: parseInt will return NaN if the string is not parsable
  const queryNumber = parseInt(queryString);
  if (queryNumber) {
    return queryNumber;
  }
  return 1;
};
