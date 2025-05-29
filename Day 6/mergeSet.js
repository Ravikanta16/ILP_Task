const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

const mergedSet = new Set([...set1, ...set2]);

console.log(mergedSet);