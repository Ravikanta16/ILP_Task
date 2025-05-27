function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}

const celsius = 60;
const fahrenheit = 45;

const convertedToF = celsiusToFahrenheit(celsius);
const convertedToC = fahrenheitToCelsius(fahrenheit);

console.log(`${celsius}°C is ${convertedToF}°F`);
console.log(`${fahrenheit}°F is ${convertedToC}°C`);
