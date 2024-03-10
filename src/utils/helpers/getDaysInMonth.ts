export function getDaysInMonth(month: number, year?: number) {
  const currentYear = year ?? new Date(Date.now()).getFullYear();

  return new Date(currentYear, month, 0).getDate();
}
