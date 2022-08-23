function catAge(humanYears) {
  let catYears = 0;

  for (let i = 0; i <= humanYears; i++) {
    switch (i) {
      case 0:
        catYears += 0;
        break;
      case 1:
        catYears += 15;
        break;
      case 2:
        catYears += 9;
        break;
      default:
        catYears += 4;
    }
  }

  return catYears;
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
