sentence = 'launch school tech & talk'

let sentenceSeparated = sentence.split(' ');
let capitalizedSentence = [];

for (word of sentenceSeparated) {
  capitalizedSentence.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedSentence = capitalizedSentence.join(' ');

console.log(capitalizedSentence);
