function filter(input) {
  if (Array.isArray(input)) {
    return true;
  } else {
    return false;
  }
}

let myArray = [5, 4, 3, 2, 1];
let myVariable = 'test';

console.log(filter(myArray));
console.log(filter(myVariable));
