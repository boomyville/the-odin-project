const convertToFahrenheit = function(f) {
  return Number((f / 5 * 9 + 32).toFixed(1));
};

const convertToCelsius = function(c) {
  return  Number(((c - 32)/9 * 5).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
