
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["rhythm guitar", "bass guitar", "lead guitar", "drums"];

function theBeatlesPlay(musicians, instruments){
  var x = [];
  for (var i = 0; i < musicians.length; i++) {
    x[i] = musicians[i] + " plays " + instruments[i]
  }
  return x
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts){
  var x = []
  var i = 0
  while (facts[i]) {
    x[i] = facts[i] + "!!!"
    i++
  }
  return x
}

function iLoveTheBeatles(n){
  var i = 0
  var x = []
  do {
    x[i] = "I love the Beatles!"
    n++
    i++
  } while (n < 15);
  return x
}
