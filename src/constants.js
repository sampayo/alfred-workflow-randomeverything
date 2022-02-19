const constants = {
  config: {
    dateAmericanFormat: "dateAmericanFormat",
    imageGrayscale: "imageGrayscale",
    imageBlur: "imageBlur",
    defaultMinMaxDates: "defaultMinMaxDates",
  },
  regex: {
    intRegex: /^\d+$/,
    minMaxRegex: /^\d+-\d+$/,
    dateRegex:
      /^(today|(\d{4})?(\/\d{2})?(\/\d{2})?)??(-)?(today|(\d{4})?(\/\d{2})?(\/\d{2})?)??$/i,
  },
};

export default constants;
