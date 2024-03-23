import { getDaysOptions } from '../getDaysOptions';

describe('Testing getDaysOptions function', () => {
  it('Should work correctly', () => {
    expect(getDaysOptions('March', '2024').length).toBe(31);
    expect(getDaysOptions('April', '2024').length).toBe(30);
    expect(getDaysOptions('February', '2024').length).toBe(29);
    expect(getDaysOptions('January', '2024').length).toBe(31);
  });

  it('Should return the result for the current year if the parameter is omitted', () => {
    expect(getDaysOptions('March').length).toBe(31);
    expect(getDaysOptions('April').length).toBe(30);
  });

  it('Should return 31 days if all parameters are omitted', () => {
    expect(getDaysOptions().length).toBe(31);
    expect(getDaysOptions().length).toBe(31);
  });
});
