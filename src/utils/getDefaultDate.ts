export const getDefaultDate = (plusMonths: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + plusMonths);

  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : String(date.getMonth() + 1);
  const day =
    date.getDate() < 10 ? `0${date.getDate()}` : String(date.getDate());

  return `${year}-${month}-${day}`;
};
