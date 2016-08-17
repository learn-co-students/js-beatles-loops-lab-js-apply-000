function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (let i = 0; i < musicians.length; i++) {
    for (let i = 0; i < instruments.length; i++);
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var newArray = [];
  for (let i = 0; i < facts.length; i++) {
    newArray.push(facts[i] + "!!!");
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var anotherEmptyArray = [];
  do {
    anotherEmptyArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return anotherEmptyArray;
}
