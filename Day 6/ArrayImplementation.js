const fruits = ["Apple", "Banana", "Cherry"];

console.log("Original Array:", fruits);
console.log("Accessing elements-")
console.log(fruits[0]);
console.log(fruits[1]); 

console.log("Add elements at end-")
fruits.push("Orange");
console.log(fruits); 

console.log("Remove elements from end-")
fruits.pop();
console.log(fruits);

console.log("Add elements at beginning-")
fruits.unshift("Mango");
console.log(fruits);

console.log("Remove elements from beginning-")
fruits.shift();
console.log(fruits);

console.log("Looping through the array-")
fruits.forEach(fruit => {
  console.log(fruit);
});
