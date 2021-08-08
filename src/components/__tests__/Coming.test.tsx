/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import { cleanup, render } from '@testing-library/react';
import { FunctionComponent } from 'react';
import { Coming } from '../Coming';

const getFutureDate = () => {
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

  return `${futureDate.getFullYear()}-${month}-${day}`;
};

beforeEach(() => {
  cleanup();
});

test('should render Coming children when toDate will be past', () => {
  const { container } = render(<Coming toDate="2020-01-01">children</Coming>);

  expect(container.textContent).toBe('children');
});

test('should render Coming countdown for future date', () => {
  const toDate = getFutureDate();

  const { getByTestId } = render(<Coming toDate={toDate}>children</Coming>);

  expect(getByTestId('coming-container')).toBeTruthy();
});

test('should render Coming with a custom component', () => {
  const toDate = getFutureDate();

  const TestComponent: FunctionComponent = (props) => {
    const data = Object.keys(props)
      .map((key) => `${key}:${props[key]}`)
      .join(',');

    return <div>custom component; {data}</div>;
  };

  const { container } = render(
    <Coming toDate={toDate} customComponent={<TestComponent />}>
      children
    </Coming>
  );

  const keyValuePair = container.textContent
    .split('; ')[1]
    ?.split(',')
    .map((text: string) => {
      const [key, value] = text.split(':');
      return {
        key,
        value,
      };
    });

  expect(container.textContent.includes('custom component')).toBeTruthy();
  keyValuePair.forEach(({ key, value }) => {
    expect(typeof key).toBe('string');
    expect(typeof value).toBe('string');
    expect(parseInt(value, 10)).toBeGreaterThanOrEqual(0);
  });
});
