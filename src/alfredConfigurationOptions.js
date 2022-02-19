import alfy from "alfy";
import constants from "./constants.js";
const { config: CONFIG } = constants;

export const getOptions = (args = "") => {
  const [input, arg] = args.split(" ");
  const number = arg && /^\d+$/.test(arg) ? parseInt(arg, 10) : undefined;

  const dateAmericanFormat = !!alfy.config.get(CONFIG.dateAmericanFormat);
  const imageGrayscale = !!alfy.config.get(CONFIG.imageGrayscale);
  const imageBlur = alfy.config.get(CONFIG.imageBlur) || 0;

  const blur = Math.min(
    Math.max(number !== undefined ? number : imageBlur, 0),
    10
  );
  const options = [
    {
      title: `Image grayscale (${imageGrayscale})`,
      subtitle: "Toggle to generate images grayscale",
      arg: `${CONFIG.imageGrayscale}-${!imageGrayscale}`,
    },
    {
      title: `Image blur (${blur})`,
      subtitle:
        "You can adjust the amount of blur by providing a number between 0 and 10",
      autocomplete: "blur ",
      arg: `${CONFIG.imageBlur}-${blur}`,
    },
    {
      title: `Date American Format (${dateAmericanFormat})`,
      subtitle: "Toggle to change date format to american version",
      arg: `${CONFIG.dateAmericanFormat}-${!dateAmericanFormat}`,
    },
  ].filter(
    (x) =>
      !input ||
      input.length === 0 ||
      (x.autocomplete &&
        x.autocomplete.toLowerCase().includes(input.toLowerCase()))
  );

  return options;
};

const input = alfy.input;
if (alfy.alfred.version) alfy.output(getOptions(input));
