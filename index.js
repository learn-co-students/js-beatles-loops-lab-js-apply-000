function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
  newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var newFacts = [];

  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }

  return newFacts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var count = 0;
  do {
    arr.push("I love the Beatles!")
    count++;
  }

  while (num < 15 && num >= count);

  return arr;
}
