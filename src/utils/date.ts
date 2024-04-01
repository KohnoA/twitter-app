export function getDateString(date: string | number | Date) {
  const currentDate = new Date(date);
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');

  return `${day}.${month}.${currentDate.getFullYear()}`;
}

export function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getShortDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString('en-EN', { month: 'short', day: 'numeric' });
}
