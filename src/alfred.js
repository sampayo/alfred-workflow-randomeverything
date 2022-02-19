import alfy from "alfy";
import random from "./index.js";
import constants from "./constants.js";

const { config: CONFIG } = constants;

const valueToInt = (v) => (v && /^\d+$/.test(v) ? parseInt(v, 10) : undefined);
const valueToMaxMin = (v) => (v && /^\d+-\d+$/.test(v) ? v : undefined);

export const getOptions = (args = "", opts) => {
  const [input, arg] = args.split(" ");
  const number = valueToInt(args);
  const randomMinMaxArg = valueToMaxMin(arg);

  const [minDateStr, maxDateStr] =
    arg &&
    /^(\d{4})?(\/\d{2})?(\/\d{2})?(-)?(\d{4})?(\/\d{2})?(\/\d{2})?$/.test(arg)
      ? arg.split("-")
      : [];
  const [minTodayStr, maxTodayStr] =
    arg && /^(today)?(-)?(today)?$/i.test(arg) ? arg.split("-") : [];

  let minDate = minDateStr ? new Date(minDateStr) : undefined;
  minDate = minTodayStr ? new Date(Date.now()) : minDate;

  let maxDate = maxDateStr ? new Date(maxDateStr) : new Date("2040/12/31");
  maxDate = maxTodayStr ? new Date(Date.now()) : maxDate;

  const { blur = 0, grayscale, dateAmericanFormat } = opts || {};

  const guid = random.randomGUID();
  const ip = random.randomIP();
  const color = random.randomColor();
  const url = random.randomUrl();
  const email = random.randomEmail();
  const name = random.randomName();
  const firstName = random.randomName("first");
  const lastName = random.randomName("last");
  const date = random.randomDate({
    min: minDate,
    american: !!dateAmericanFormat,
    max: maxDate,
  });
  const dateIso = random
    .randomDate({
      string: false,
      american: !!dateAmericanFormat,
      min: minDate,
      max: maxDate,
    })
    .toISOString();
  const country = random.randomCountry();
  const city = random.randomCity();
  const address = random.randomAddress();
  const phone = random.randomPhone();
  const street = random.randomStreet();
  const lettersAndNumbers = random.randomLettersAndNumbers(number);
  const letters = random.randomLetters(number);
  const floatString = random.randomFloatString(randomMinMaxArg);
  const randomInt = random.insertRandomInt(randomMinMaxArg || "0-100");
  const loremWorlds = random.lipsumWorlds(number);
  const loremSentences = random.lipsumSentences(number);
  const loremParagraphs = random.lipsumParagraphs(number);
  const picsum = random.randomPicsum(randomMinMaxArg, {
    blur,
    grayscale,
  });

  const options = [
    { title: "Address", value: address },
    { title: "City", value: city },
    { title: "Color", value: color },
    { title: "Country", value: country },
    {
      title: "ISO Format date (MIN-MAX)",
      subtitle: "(2010-today)",
      value: dateIso,
      autocomplete: "date ",
    },
    {
      title: "Date (MIN-MAX)",
      subtitle: "(2010-today)",
      value: date,
      autocomplete: "date ",
    },
    { title: "Email", value: email },
    { title: "Float (MIN-MAX)", value: floatString, autocomplete: "float " },
    { title: "Int (MIN-MAX)", value: randomInt, autocomplete: "int " },
    { title: "ip", value: ip },
    { title: "Name", value: name },
    { title: "First Name", value: firstName },
    { title: "Last Name", value: lastName },
    { title: "Letters (length)", value: letters, autocomplete: "letters " },
    {
      title: "Letters And Numbers (length)",
      value: lettersAndNumbers,
      autocomplete: "letters ",
    },
    { title: "Lorem Worlds", value: loremWorlds, autocomplete: "lorem " },
    { title: "Lorem Sentences", value: loremSentences, autocomplete: "lorem " },
    {
      title: "Lorem Paragraphs",
      value: loremParagraphs,
      autocomplete: "lorem ",
    },
    { title: "Phone", value: phone },
    { title: "Street", value: street },
    { title: "Url", value: url },
    { title: "guid", value: guid },
    { title: "image", value: picsum, autocomplete: "image " },
  ];

  const items = options
    .filter(
      (x) =>
        !input ||
        input.length === 0 ||
        x.title.toLowerCase().includes(input.toLowerCase())
    )
    .map((x) => ({
      title: x.title,
      subtitle: [x.subtitle, `Value: ${x.value}`].filter((x) => !!x).join(" "),
      arg: x.value,
      autocomplete: x.autocomplete || x.title,
    }));

  return items;
};

const input = alfy.input;
if (alfy.alfred.version) {
  const options = {
    blur: alfy.config.get(CONFIG.imageBlur),
    grayscale: !!alfy.config.get(CONFIG.imageGrayscale),
    dateAmericanFormat: !!alfy.config.get(CONFIG.dateAmericanFormat),
  };
  alfy.output(getOptions(input, options));
}
