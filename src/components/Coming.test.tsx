/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import { cleanup, render } from '@testing-library/react';
import { Coming } from './Coming';

beforeEach(() => {
  cleanup();
});

test('should render empty Coming component', () => {
  const { container } = render(<Coming />);

  expect(container.textContent).toBe('');
});

test('should render Coming children when toDate will be past', () => {
  const { container } = render(<Coming toDate="2020-01-01">children</Coming>);

  expect(container.textContent).toBe('children');
});

test('should render Coming countdown for future date', () => {
  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 3);

  const month =
    futureDate.getMonth() < 10
      ? `0${futureDate.getMonth()}`
      : futureDate.getMonth();
  const day =
    futureDate.getDate() < 10
      ? `0${futureDate.getDate()}`
      : futureDate.getDate();

  const { getByTestId } = render(
    <Coming toDate={`${futureDate.getFullYear()}-${month}-${day}`}>
      children
    </Coming>
  );

  expect(getByTestId('coming-container')).toBeTruthy();
});
