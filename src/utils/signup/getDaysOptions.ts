import { MONTH } from '@/constants';

import { getDaysInMonth } from '../date';

export function getDaysOptions(month?: (typeof MONTH)[number], year?: string) {
  const FIRTS_DAY_NUMBER = 1;
  const MAX_DAYS_IN_MONTH = 31;

  const currentYear = year ? Number(year) : new Date(Date.now()).getFullYear();
  const countDaysInMonth = month
    ? getDaysInMonth(MONTH.indexOf(month), currentYear)
    : MAX_DAYS_IN_MONTH;

  return new Array(countDaysInMonth).fill(FIRTS_DAY_NUMBER).map((day, index) => day + index);
}
