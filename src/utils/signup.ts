import { MONTH, REGEX_ONLY_DIGITS, REGEX_PHONE_MASK } from '@/constants';

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

export function setPhoneMask(value: string) {
  if (value === '+') return value;

  const x = value.replace(REGEX_ONLY_DIGITS, '').match(REGEX_PHONE_MASK);

  if (!x || !x[0].length) return '';

  return !x[3]
    ? `+${x[1]}${x[2]}`
    : `+${x[1]} (${x[2]}) ${x[3]}${x[4] && `-${x[4]}`}${x[5] && `-${x[5]}`}`;
}
