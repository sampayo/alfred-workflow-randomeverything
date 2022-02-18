import { getOptions } from "./alfred.js";

const items = getOptions();
items.forEach((x) => {
  console.log(`${x.title} = ${x.arg}`);
});
