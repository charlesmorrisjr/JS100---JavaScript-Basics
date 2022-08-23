let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let passcodeString = '';

passcodeString = passcode.join('-');

/* Alternative method

for (part of passcode) {
  if (passcodeString !== '') {
    passcodeString = passcodeString.concat('-' + part);
  } else {
    passcodeString = passcodeString.concat(part);
  }
}

*/

console.log(passcodeString);

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'