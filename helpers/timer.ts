const getFormatNumber = (number: number): string => {
  return number > 10 ? String(number) : `0${number}`;
};

/**
 * Return the string format from number of second
 * @returns format hh:mm:ss
 */
const getFormatTime = (time: number): string => {
  // calculate from number of seconds
  const seconds = Math.round(time % 60);
  const minutes = Math.round(Math.floor(time / 60) % 60);
  const hours = Math.round(time / 3600);

  // return string format to display
  return `${getFormatNumber(hours)}:${getFormatNumber(
    minutes
  )}:${getFormatNumber(seconds)}`;
};

export default {
  getFormatTime,
};
