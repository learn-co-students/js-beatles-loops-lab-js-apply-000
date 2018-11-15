// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo" ]
var instruments = ["Guitar","Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  var arri = [];
  while (i < facts.length){
      arri.push(`${facts[i]}!!!`)
    i++;
  }
  return arri;
}

function iLoveTheBeatles(num){
  var uno = [];
  do {
    uno.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return uno;
}