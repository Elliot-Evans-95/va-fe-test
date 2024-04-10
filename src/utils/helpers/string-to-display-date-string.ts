const abbreviatedMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
] as const;

const defaultTime = "T00:00:00";

export const stringToDisplayDateString = (textString: string) => {
  const date = new Date(`${textString}${defaultTime}`);
  const year = date.getFullYear();

  if (Number.isNaN(year)) {
    return textString;
  }

  const currentDay = date.getDate();
  const day = currentDay < 10 ? `0${currentDay}` : currentDay;
  const month = abbreviatedMonths[date.getMonth()];

  return `${day} ${month}, ${year}`;
};
