import { MONTH } from '@/constants';

export function getBirthdayDate(year: string, month: string, day: string): string {
  return new Date(Number(year), MONTH.indexOf(month), Number(day)).toISOString();
}
