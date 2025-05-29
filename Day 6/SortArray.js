const arr = [5, 2, 8, 1, 3];

const ascending = [...arr].sort((a, b) => a - b);
console.log("Ascending:", ascending);

const descending = [...arr].sort((a, b) => b - a);
console.log("Descending:", descending);
