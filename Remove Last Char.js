function removeLastChar(word) {
  return word.slice(0, -1);
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'
