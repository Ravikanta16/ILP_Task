const nums = [1, 2, 3];

console.log("Original Array:", nums);

console.log("ForEach Method: Simple Iteration");
nums.forEach((num, index) => {
  console.log(`Value at Index ${index} is: ${num}`);
});

console.log("Map Method: Square Each Element");
const squares = nums.map(num => num * num);
console.log(squares);

console.log("Filter Method: Get Even Numbers");
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers); 

console.log("Reduce Method: Sum of Elements");
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

console.log("Includes Method: Check for Existence");
console.log(nums.includes(2)); 
console.log(nums.includes(5)); 

console.log("Some Method: Check for Any Even Number");
const hasEven = nums.some(num => num % 2 === 0);
console.log(hasEven);

console.log("Every Method: Check if All Positive");
const allPositive = nums.every(num => num > 0);
console.log(allPositive); 
