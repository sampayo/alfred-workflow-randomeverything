import alfy from "alfy";
import constants from "./constants.js";

const { config: CONFIG } = constants;

const stringToBoolean = (v) => v === "true";
const run = (args = "") => {
  const [key, value] = args.split("-");
  const number = value && /^\d+$/.test(value) ? parseInt(value, 10) : undefined;

  switch (key) {
    case CONFIG.dateAmericanFormat:
      alfy.config.set(CONFIG.dateAmericanFormat, stringToBoolean(value));
      break;
    case CONFIG.imageGrayscale:
      alfy.config.set(CONFIG.imageGrayscale, stringToBoolean(value));
      break;
    case CONFIG.imageBlur:
      alfy.config.set(CONFIG.imageBlur, number);
      break;
    default:
      break;
  }
};

const input = alfy.input;
if (alfy.alfred.version) run(input);
