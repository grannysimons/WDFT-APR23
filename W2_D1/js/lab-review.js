// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(words, word) {
  //if word is included in the array of words: return true
  //otherwise return false

  if(words.length == 0) return null;

  // for(let i=0; i<words.length; i++) {
  //   if(words[i] == word) { return true }
  // }
  // return false;

  let result = false;
  words.forEach(function(wordItem){
    if(wordItem == word) {result = true};
  })
  return result;
  
  // if(words.includes(word)) return true;
  // else return false;

  // return words.includes(word);
}

doesWordExist([], "webdev")


// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(words, word) {
  let count = 0;

  // for(let i=0; i<words.length; i++) {
  //   if(word == words[i]) count++;
  // }

  words.forEach(function(wordItem){
    if(word == wordItem) count++;
  })

  return count;
}