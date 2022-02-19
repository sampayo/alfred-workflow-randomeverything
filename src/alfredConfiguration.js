import alfy from "alfy";
import constants from "./constants.js";
import { valueToDates } from "./utils.js";

const { config: CONFIG } = constants;

const stringToBoolean = (v) => v === "true";
const run = (args = "") => {
  const [key, value1, value2] = args.split("-");
  const number =
    value1 && /^\d+$/.test(value1) ? parseInt(value1, 10) : undefined;

  const minMaxDate = valueToDates([value1 || "", value2 || ""].join("-"));

  switch (key) {
    case CONFIG.dateAmericanFormat:
      alfy.config.set(CONFIG.dateAmericanFormat, stringToBoolean(value1));
      break;
    case CONFIG.imageGrayscale:
      alfy.config.set(CONFIG.imageGrayscale, stringToBoolean(value1));
      break;
    case CONFIG.imageBlur:
      number === undefined
        ? alfy.config.clear(CONFIG.imageBlur)
        : alfy.config.set(CONFIG.imageBlur, number);
      break;
    case CONFIG.defaultMinMaxDates:
      !minMaxDate
        ? alfy.config.clear(CONFIG.defaultMinMaxDates)
        : alfy.config.set(CONFIG.defaultMinMaxDates, minMaxDate);
      break;
    default:
      break;
  }
};

const input = alfy.input;
if (alfy.alfred.version) run(input);
