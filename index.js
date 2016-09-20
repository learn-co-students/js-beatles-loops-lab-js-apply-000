function theBeatlesPlay (musicans, instruments) {
  var plays = [];

  for (var i = 0; i < musicans.length; i ++) {
    plays.push (musicans[i] + " plays " + instruments[i]);
  }
  return plays;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (facts) {
var i = 0;
var things = [];
  while (i < facts.length) {
    things.push(facts[i] + "!!!")
    i++
  }
  return things;
}


function iLoveTheBeatles (num) {
var times = [];
var beatles = ["I love the Beatles!"]
  for (var i = 0; i <= num; i ++) {
    if (num < 15) {
      times.push("I love the Beatles!")
    } else {
      return beatles;
    }
  }
  return times;
}
