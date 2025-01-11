const convertToCelsius = function(farenheit) {
  let celsius = (farenheit - 32) * 5 / 9;
  rounded = Math.round(celsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celcius) {
  let farenheit = celcius * 9 / 5 + 32;
  rounded = Math.round(farenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
