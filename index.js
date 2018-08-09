// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return myArray
}

const lennonFacts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var lennonResult = [];
  var i = 0;
  while (i < facts.length) {
    lennonResult.push(facts[i] + '!!!')
    i++;
  }
  return lennonResult;
}

function iLoveTheBeatles(n) {
  var beatlesArray = []
  do {
    beatlesArray.push("I love the Beatles!");
    n++
  } while (n < 15);
  return beatlesArray;
}