// add solution here
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

const theBeatlesPlay = (musicians, instruments) => {
  var length = musicians.length;
  var newArray = [];
  for (var i = 0; i < length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var length = facts.length;
  var i = 0;
  while (i < length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  const newArray = [];
  do {
    newArray.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return newArray;
}
