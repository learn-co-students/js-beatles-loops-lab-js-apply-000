// add solution here
let musicianFacts = [];
let facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
    musicianFacts.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musicianFacts;
}

function johnLennonFacts(array) {
  let i = 0;
  while (i < array.length) {
    array[i] += "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  let loveBeatlesArray = [];
  do {
    loveBeatlesArray.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return loveBeatlesArray;
}

theBeatlesPlay(musicians, instruments);
johnLennonFacts(facts);
iLoveTheBeatles(7);