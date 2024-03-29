import { REGEX_ONLY_DIGITS, REGEX_PHONE_MASK } from '@/constants';

export function setPhoneMask(value: string) {
  if (value === '+') return value;

  const x = value.replace(REGEX_ONLY_DIGITS, '').match(REGEX_PHONE_MASK);

  if (!x || !x[0].length) return '';

  return !x[3]
    ? `+${x[1]}${x[2]}`
    : `+${x[1]} (${x[2]}) ${x[3]}${x[4] && `-${x[4]}`}${x[5] && `-${x[5]}`}`;
}
