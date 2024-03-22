export function getDateString(date: string | number | Date) {
  const currentDate = new Date(date);
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');

  return `${day}.${month}.${currentDate.getFullYear()}`;
}
