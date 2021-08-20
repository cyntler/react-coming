import { calculateValues } from '../calculateValues';

test('should return calculated values for 1000 ms', () => {
  const [days, hours, minutes, seconds] = calculateValues(1000);

  expect(days).toBe(0);
  expect(hours).toBe(0);
  expect(minutes).toBe(0);
  expect(seconds).toBe(1);
});

test('should return calculated values for 60000 ms', () => {
  const [days, hours, minutes, seconds] = calculateValues(60000);

  expect(days).toBe(0);
  expect(hours).toBe(0);
  expect(minutes).toBe(1);
  expect(seconds).toBe(0);
});
