const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate.toISOString()}`;
console.log(currentDateFormat);

const formatDateMMDDYYYY = function (date) {
  return `Formatted Date (MM/DD/YYYY): ${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
};
console.log(formatDateMMDDYYYY(currentDate));

const formatDateLong = function (date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return `Formatted Date (Month Day, Year): ${date.toLocaleDateString(
    "en-US",
    options
  )}`;
};
