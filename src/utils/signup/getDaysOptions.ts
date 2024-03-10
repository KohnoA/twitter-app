import { getDaysInMonth } from '../helpers';

export function getDaysOptions(month: number, year?: number) {
  const FIRTS_DAY_NUMBER = 1;

  const countDaysInMonth = getDaysInMonth(month, year);

  return new Array(countDaysInMonth).fill(FIRTS_DAY_NUMBER).map((day, index) => day + index);
}
