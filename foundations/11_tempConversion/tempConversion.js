const convertToCelsius = function (temp) {
  let tempInCelsius = ((temp - 32) * 5) / 9;
  let roundedTempInCelsius = Math.round(tempInCelsius * 10) / 10;
  return roundedTempInCelsius;
};

const convertToFahrenheit = function (temp) {
  let tempInFahrenheit = temp * (9 / 5) + 32;
  let roundedTempInFahrenheit = Math.round(tempInFahrenheit * 10) / 10;
  return roundedTempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
