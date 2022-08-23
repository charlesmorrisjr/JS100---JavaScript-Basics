function repeat(numOfTimes, string) {
  let newString = '';
  
  for (i = 1; i <= numOfTimes; i++) {
    newString += string;
  }

  return newString;
}

console.log(repeat(3, 'ha')); // 'hahaha'
