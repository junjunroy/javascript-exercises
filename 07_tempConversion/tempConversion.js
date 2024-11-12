const convertToCelsius = function(fValue) {
  return Math.round(((fValue-32) * 5) / 9 * 10)/10;
};

const convertToFahrenheit = function(cValue) {
  return Math.round(((cValue * 9/5) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
