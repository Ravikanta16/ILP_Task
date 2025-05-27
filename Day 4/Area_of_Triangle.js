const a = 5;
const b = 6;
const c = 7;

const s = (a + b + c) / 2;

const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("The area of the triangle is: " + area.toFixed(2));
