import { getDaysInMonth } from '../date';

describe('Testing getDaysInMonth function', () => {
  it('Should work correctly', () => {
    expect(getDaysInMonth(0, 2024)).toBe(31);
    expect(getDaysInMonth(1, 2024)).toBe(29);
    expect(getDaysInMonth(2, 2024)).toBe(31);
    expect(getDaysInMonth(3, 2024)).toBe(30);
  });
});
