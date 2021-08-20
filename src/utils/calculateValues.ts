const calculateDaysValue = (distance: number) =>
  Math.floor(distance / (1000 * 60 * 60 * 24));

const calculateHoursValue = (distance: number) =>
  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const calculateMinutesValue = (distance: number) =>
  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const calculateSecondsValue = (distance: number) =>
  Math.floor((distance % (1000 * 60)) / 1000);

export const calculateValues = (distance: number) => [
  calculateDaysValue(distance),
  calculateHoursValue(distance),
  calculateMinutesValue(distance),
  calculateSecondsValue(distance),
];
