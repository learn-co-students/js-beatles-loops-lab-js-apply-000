var musicians = ["John", "Ringo", "Steve", "David"];
var instruments = ["Guitar", "Piano", "Bass", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (let i = 0; i < musicians.length; i++) {
      arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var lennonFacts = [];
  let i = 0;
  while (i < facts.length){
    lennonFacts.push(facts[i] + "!!!");
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(n) {
  var arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
