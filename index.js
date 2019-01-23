// add solution here
var musicians = ["John, Paul, George, Ringo"]
var instruments = ["Guitar, Drums, Bass"]
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts() {
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
];

  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] +"!!!");
    i++;
    }
    return newFacts;

}

function iLoveTheBeatles(num) {
  var array = [];
  do {
  array.push("I love the Beatles!")
  num++;
  } while (num < 15);
  return array;
}