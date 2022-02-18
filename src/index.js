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
  const min = Number.parseInt(minS);
  const max = Number.parseInt(maxS);

  if (isNaN(min) || isNaN(max)) throw new Error("Invalid format.");

  return _randomIntString(min, max);
};

const randomFloatString = (minMax) => {
  const [minS, maxS] = minMax ? minMax.split("-") : [];
  const min = minS ? Number.parseInt(minS) : 0;
  const max = maxS ? Number.parseInt(maxS) : 1;

  const chance = Chance();
  const randomVar = chance.floating({ min: min, max: max });

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
};
