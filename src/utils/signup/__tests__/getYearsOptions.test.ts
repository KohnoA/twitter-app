import { getYearsOptions } from '../getYearsOptions';

describe('Testing getYearsOptions function', () => {
  it('Should work correctly', () => {
    const FIRST_VALID_YEAR = 1970;
    const secondStartYear = 2000;
    const thirtStartYear = 2020;

    expect(getYearsOptions().length).toBe(
      new Date(Date.now()).getFullYear() - FIRST_VALID_YEAR + 1,
    );
    expect(getYearsOptions(secondStartYear).length).toBe(
      new Date(Date.now()).getFullYear() - 2000 + 1,
    );
    expect(getYearsOptions(thirtStartYear).length).toBe(
      new Date(Date.now()).getFullYear() - 2020 + 1,
    );
  });
});
