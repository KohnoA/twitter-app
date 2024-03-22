import { getDateString } from '../getDateString';

describe('Testing getDateString function', () => {
  it('Must work with different types of arguments', () => {
    expect(getDateString(new Date(2024, 3, 20))).toBe('20.04.2024');
    expect(getDateString(new Date(2024, 3, 20).getTime())).toBe('20.04.2024');
    expect(getDateString('2024.04.20')).toBe('20.04.2024');
  });
});
