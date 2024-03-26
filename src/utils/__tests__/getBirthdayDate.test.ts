import { getBirthdayDate } from '../signup';

describe('Testing getBirthdayDate function', () => {
  it('Should work correctly', () => {
    expect(getBirthdayDate('2001', 'March', '1')).toBe(new Date(2001, 2, 1).toISOString());
    expect(getBirthdayDate('2000', 'April', '1')).toBe(new Date(2000, 3, 1).toISOString());
    expect(getBirthdayDate('1999', 'September', '1')).toBe(new Date(1999, 8, 1).toISOString());
    expect(getBirthdayDate('1998', 'June', '1')).toBe(new Date(1998, 5, 1).toISOString());
  });
});
