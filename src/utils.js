import constants from "./constants.js";

const { regex: REGEX } = constants;

export const isValidDate = (d) => d instanceof Date && !isNaN(d);

const isToday = (date) => date && date.toLowerCase() === "today";

export const valueToDates = (v) =>
  v && REGEX.dateRegex.test(v) ? v : undefined;

export const prepareDate = (dStr) => {
  if (!dStr || dStr.length === 0) return undefined;

  let date = !isToday(dStr) ? new Date(dStr) : undefined;
  date = isToday(dStr) ? new Date(Date.now()) : date;
  return date;
};

export const getDates = (v) => {
  const val = valueToDates(v);
  if (!val) return [];

  const [minTodayStr, maxTodayStr] = val.split("-");

  const minDate = prepareDate(minTodayStr);
  const maxDate = prepareDate(maxTodayStr);
  return [minDate, maxDate];
};
