import Chance from "chance";
import { LoremIpsum } from "lorem-ipsum";
// import fs from "fs";
// import wordsShort from "./assets/words.short.json";

/**
 * Chance.js Wrappers
 */
const _randomIntString = (min, max) => {
  const chance = Chance();
  const randomVar = chance.integer({ min: min, max: max });

  return randomVar.toString();
};

const insertRandomInt = (minMax = "0-100") => {
  const [minS, maxS] = minMax.split("-");
  const min = minS && minS.length > 0 ? Number.parseInt(minS) : 0;
  const max = maxS && maxS.length > 0 ? Number.parseInt(maxS) : 100;

  return _randomIntString(min, min >= max ? min + 1 : max);
};

const randomFloatString = (minMax) => {
  const [minS, maxS] = minMax ? minMax.split("-") : [];
  const min = minS && minS.length > 0 ? Number.parseInt(minS) : 0;
  const max = maxS && maxS.length > 0 ? Number.parseInt(maxS) : 1;

  const chance = Chance();
  const randomVar = chance.floating({
    min: min,
    max: min >= max ? min + 1 : max,
  });

  return randomVar.toString();
};

const randomLetters = (length) => {
  const chance = Chance();
  const randomVar = chance.string({
    pool: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    length,
  });

  return randomVar;
};

const randomLettersAndNumbers = (length) => {
  const chance = Chance();
  const randomVar = chance.string({
    pool: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    length,
  });

  return randomVar;
};

const randomCountry = (isFull = true) => {
  const chance = Chance();
  const randomVar = chance.country({ full: isFull });

  return randomVar;
};

const randomCity = () => {
  const chance = Chance();
  const randomVar = chance.city();

  return randomVar;
};

const randomAddress = () => {
  const chance = Chance();
  const randomVar = chance.address();

  return randomVar;
};

const randomPhone = (country = "uk") => {
  const chance = Chance();
  const randomVar = chance.phone({ country });

  return randomVar;
};

const randomStreet = (country = "us") => {
  const chance = Chance();
  const randomVar = chance.street({ country });

  return randomVar;
};

const randomDate = ({
  string = true,
  american = false,
  year,
  max,
  min,
} = {}) => {
  const chance = Chance();
  const randomVar = chance.date({ string, american, year, max, min });

  return randomVar;
};

const randomName = (format) => {
  const chance = Chance();
  let randomVar;

  switch (format) {
    case "first":
      randomVar = chance.first();
      break;
    case "last":
      randomVar = chance.last();
      break;
    case "full":
    default:
      randomVar = chance.name();
      break;
  }

  return randomVar;
};

const randomEmail = () => {
  const chance = Chance();
  const randomVar = chance.email();

  return randomVar;
};

const randomUrl = () => {
  const chance = Chance();
  const randomVar = chance.url();

  return randomVar;
};

const randomColor = () => {
  const chance = Chance();
  const randomVar = chance.color({ format: "hex" });

  return randomVar;
};

const randomIP = (option) => {
  const chance = Chance();
  let randomVar;

  switch (option) {
    default:
    case "ipv4":
      randomVar = chance.ip();
      break;
    case "ipv6":
      randomVar = chance.ipv6();
      break;
  }

  return randomVar;
};

const randomGUID = () => {
  const chance = Chance();
  const randomVar = chance.guid();

  return randomVar;
};

const lipsumWorlds = (amount = 7) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return lorem.generateWords(amount);
};

const lipsumSentences = (amount = 3) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return lorem.generateSentences(amount);
};

const lipsumParagraphs = (amount = 1) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  return lorem.generateParagraphs(amount);
};

const randomPicsum = (widthHeight, options) => {
  const [minS, maxS] = widthHeight ? widthHeight.split("-") : [];
  const min = minS && minS.length > 0 ? Number.parseInt(minS) : 200;
  const max = maxS && maxS.length > 0 ? Number.parseInt(maxS) : 200;

  const { blur, type, grayscale } = options || {};

  let queryString = [blur && `blur=${blur}`, grayscale && "grayscale"]
    .filter((x) => !!x)
    .join("&");
  queryString = queryString.length > 0 ? `?${queryString}` : "";

  const ext = type ? `.${type}` : "";
  const seed = randomLettersAndNumbers(7);

  return `https://picsum.photos/seed/${seed}/${min}/${max}${ext}${queryString}`;
};

export default {
  randomGUID,
  randomIP,
  randomColor,
  randomUrl,
  randomEmail,
  randomName,
  randomDate,
  randomAddress,
  randomCountry,
  randomCity,
  randomStreet,
  randomPhone,
  randomLettersAndNumbers,
  randomLetters,
  randomFloatString,
  insertRandomInt,
  lipsumWorlds,
  lipsumSentences,
  lipsumParagraphs,
  randomPicsum,
};
