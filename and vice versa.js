let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person = {};
//let person = Object.fromEntries(nestedArray);

nestedArray.forEach(pair => person[pair[0]] = pair[1]);


console.log(person);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }