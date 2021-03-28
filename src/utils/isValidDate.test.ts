/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import { isValidDate } from './isValidDate';

test('date should be invalid', () => {
  const date = new Date('21-01-01');
  const result = isValidDate(date);

  expect(result).toBeFalsy();
});

test('date should be valid', () => {
  const date = new Date('2021-01-01');
  const result = isValidDate(date);

  expect(result).toBeTruthy();
});
