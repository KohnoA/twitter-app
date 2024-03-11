export function getYearsOptions() {
  const FIRST_VALID_YEAR = 1970;

  const arrayLength = new Date(Date.now()).getFullYear() - FIRST_VALID_YEAR + 1;

  return new Array(arrayLength).fill(FIRST_VALID_YEAR).map((year, index) => year + index);
}
