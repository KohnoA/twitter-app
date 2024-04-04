import { getShortDate } from '../date';

describe('Testing getShortDate function', () => {
  it('Should work correctly', () => {
    expect(getShortDate(new Date(2024, 3, 1))).toBe('Apr 1');
    expect(getShortDate(new Date(2024, 2, 1))).toBe('Mar 1');
    expect(getShortDate(new Date(2024, 1, 1))).toBe('Feb 1');
    expect(getShortDate(new Date(2024, 0, 1))).toBe('Jan 1');
  });

  it('Must work with different types of arguments', () => {
    expect(getShortDate(new Date(2024, 3, 1))).toBe('Apr 1');
    expect(getShortDate(new Date(2024, 2, 1).getTime())).toBe('Mar 1');
    expect(getShortDate(new Date(2024, 1, 1).toISOString())).toBe('Feb 1');
  });
});
