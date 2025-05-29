function getRandomInTwoRanges() {
  const Range = Math.random() < 0.5;

  if (Range) {
    return Math.floor(Math.random() * 101) - 100;
  } else {
    return Math.floor(Math.random() * 101) + 800;
  }
}

for (let i = 0; i < 10; i++) {
  console.log(getRandomInTwoRanges());
}

