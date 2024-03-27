export const REGEX_NAME = /^[A-Z][A-Z|a-z|\s]{2,30}$/;
export const REGEX_PHONE = /^\+375 \((17|29|33|44)\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/;
export const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const REGEX_PHONE_MASK = /(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/;
export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const REGEX_ONLY_DIGITS = /\D/g;
