let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);

console.log(nestedPerson[0], nestedPerson[1], nestedPerson[2]);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]