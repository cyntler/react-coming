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
import { getDefaultDate } from '../utils/getDefaultDate';
import { injectFont } from '../utils/injectFont';
import { isValidDate } from '../utils/isValidDate';
import { logError } from '../utils/logError';
import { Container, Item, List, Name, Value } from './Coming.styles';
import { ComingProps, ComingValues } from './Coming.types';

export const Coming: FunctionComponent<ComingProps> = ({
  children,
  enabled,
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

  const countdownDate = useMemo(() => {
    const [year, month, day] = toDate.split('-');
    const [hour, minute] = toTime.split(':');

    return new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day, 10),
      parseInt(hour, 10),
      parseInt(minute, 10)
    );
  }, []);

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

  if (!isRunning || !enabled) {
    return fallbackReturn;
  }

  const { days, hours, minutes, seconds } = values;

  return (
    <Container data-testid="coming-container">
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
  children: null,
  enabled: true,
  toDate: getDefaultDate(3),
  toTime: '00:00',
  daysLabel: 'days',
  hoursLabel: 'hours',
  minutesLabel: 'minutes',
  secondsLabel: 'seconds',
};
