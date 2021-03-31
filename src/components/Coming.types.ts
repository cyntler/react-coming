/**
 * @name react-coming
 * @author cyntler <damian@cyntler.com>
 */
import { ReactNode } from 'react';

export interface ComingProps {
  children?: ReactNode;
  enabled?: boolean;
  toDate?: string;
  toTime?: string;
  daysLabel?: string;
  hoursLabel?: string;
  minutesLabel?: string;
  secondsLabel?: string;
}

export interface ComingValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
