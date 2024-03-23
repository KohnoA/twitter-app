export function getShortDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString('en-EN', { month: 'short', day: 'numeric' });
}
