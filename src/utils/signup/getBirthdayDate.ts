import { MONTH } from '@/constants';

export function getBirthdayDate(year: string, month: (typeof MONTH)[number], day: string): string {
  return new Date(Number(year), MONTH.indexOf(month), Number(day)).toISOString();
}
