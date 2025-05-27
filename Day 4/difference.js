function difference(number) {
  const diff = Math.abs(number - 13);
  if (number > 13) {
    return 2 * diff;
  } else {
    return diff;
  }
}

console.log(difference(10));
console.log(difference(27));
