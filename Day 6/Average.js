const nums = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum=sum+nums[i];
}
const average = sum / nums.length;
console.log("Average:", average);
