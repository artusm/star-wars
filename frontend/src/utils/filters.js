import formatNumber from "human-number";

const defaultNotAnswerText = "N/A";
const separator = ", ";

export const humanNumber = (value) =>
  value === null ? null : formatNumber(value);

export const extractFromArray = (value, name = "name") =>
  value?.length
    ? value.map((item) => item[name]).join(separator)
    : defaultNotAnswerText;

export const extractFromObject = (value, name = "name") =>
  value ? value[name] : defaultNotAnswerText;

export const arrayToString = (value) =>
  value?.length ? value.join(separator) : null;
