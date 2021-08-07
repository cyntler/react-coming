/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import { getDefaultDate } from '../getDefaultDate';

test('default date should be valid for +3 months', () => {
  const plusMonths = 3;
  const result = getDefaultDate(plusMonths);

  const date = new Date();
  date.setMonth(date.getMonth() + plusMonths);

  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : String(date.getMonth() + 1);
  const day =
    date.getDate() < 10 ? `0${date.getDate()}` : String(date.getDate());

  expect(result).toBe(`${year}-${month}-${day}`);
});
