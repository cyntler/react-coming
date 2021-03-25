/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
export const isValidDate = (date: Date) =>
  date instanceof Date && !isNaN(date.getTime());
