var beatles = ["john", "george", "ringo", "paul"];
var inst = ["guitar", "bass", "drums", "guitar"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay (musicians, instruments) {
  var combineArray = [];
  for (var i = 0, l = musicians.length; i < l; i++) {
    combineArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return combineArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var tempArray = [];
  var i = 0;
  do {
    tempArray.push("I love the Beatles!");
    i++;
  }
  while (i <= number && number < 15);
  return tempArray;
}

theBeatlesPlay(beatles, inst);
johnLennonFacts(facts);
iLoveTheBeatles(20);
