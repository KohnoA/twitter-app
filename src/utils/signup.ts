import { MONTH } from '@/constants';

import { getDaysInMonth } from './date';

const FIRST_VALID_YEAR = 1970;

export function getYearsOptions(minYear = FIRST_VALID_YEAR) {
  const arrayLength = new Date(Date.now()).getFullYear() - minYear + 1;

  return new Array(arrayLength).fill(FIRST_VALID_YEAR).map((year, index) => year + index);
}

export function getBirthdayDate(year: string, month: string, day: string): string {
  return new Date(Number(year), MONTH.indexOf(month), Number(day)).toISOString();
}

export function getDaysOptions(month?: string, year?: string) {
  const FIRTS_DAY_NUMBER = 1;
  const MAX_DAYS_IN_MONTH = 31;

  const currentYear = year ? Number(year) : new Date(Date.now()).getFullYear();
  const countDaysInMonth = month
    ? getDaysInMonth(MONTH.indexOf(month), currentYear)
    : MAX_DAYS_IN_MONTH;

  return new Array(countDaysInMonth).fill(FIRTS_DAY_NUMBER).map((day, index) => day + index);
}
