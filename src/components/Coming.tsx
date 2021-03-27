/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import {
  Fragment,
  FunctionComponent,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { calculateValues } from '../utils/calculateValues';
import { injectFont } from '../utils/injectFont';
import { isValidDate } from '../utils/isValidDate';
import { logError } from '../utils/logError';
import { Container, Item, List, Name, Value } from './Coming.styles';
import { ComingProps, ComingValues } from './Coming.types';

export const Coming: FunctionComponent<ComingProps> = ({
  children,
  disabled,
  toDate,
  toTime,
  daysLabel,
  hoursLabel,
  minutesLabel,
  secondsLabel,
}) => {
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isRunning, setIsRunning] = useState(true);
  const [values, setValues] = useState<ComingValues>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const fallbackReturn = useMemo(
    () => (children ? <Fragment>{children}</Fragment> : null),
    []
  );

  const countdownDate = useMemo(
    () => new Date(`${toDate}T${toTime}:00.000Z`),
    []
  );

  if (!isValidDate(countdownDate)) {
    logError('The passed date or time is invalid.');
    return fallbackReturn;
  }

  const countdownTime = useMemo(() => countdownDate.getTime(), []);

  const startCountdown = useCallback(() => {
    const now = Date.now();
    const distance = countdownTime - now;

    if (distance <= 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      return;
    }

    const [days, hours, minutes, seconds] = calculateValues(distance);

    if (!isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
      setValues({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (countdownTime) {
      injectFont();
      startCountdown();
      intervalRef.current = setInterval(startCountdown, 1000);
    }
  }, []);

  if (!isRunning || disabled) {
    return fallbackReturn;
  }

  const { days, hours, minutes, seconds } = values;

  return (
    <Container>
      <List>
        <Item>
          <Value>{days}</Value>
          <Name>{daysLabel}</Name>
        </Item>
        <Item>
          <Value>{hours}</Value>
          <Name>{hoursLabel}</Name>
        </Item>
        <Item>
          <Value>{minutes}</Value>
          <Name>{minutesLabel}</Name>
        </Item>
        <Item>
          <Value>{seconds}</Value>
          <Name>{secondsLabel}</Name>
        </Item>
      </List>
    </Container>
  );
};

Coming.defaultProps = {
  disabled: false,
  toDate: undefined,
  toTime: '00:00',
  daysLabel: 'days',
  hoursLabel: 'hours',
  minutesLabel: 'minutes',
  secondsLabel: 'seconds',
};
