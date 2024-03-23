const FIRST_VALID_YEAR = 1970;

export function getYearsOptions(minYear = FIRST_VALID_YEAR) {
  const arrayLength = new Date(Date.now()).getFullYear() - minYear + 1;

  return new Array(arrayLength).fill(FIRST_VALID_YEAR).map((year, index) => year + index);
}
