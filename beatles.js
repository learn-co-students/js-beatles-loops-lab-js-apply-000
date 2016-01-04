'use strict';
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var together = [];
  for (var i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " plays " + instruments[i];
    together.push(sentence);
  }
return together;
}


function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var i = 0;
  var excitedFacts = [];
  while (i < facts.length){
    excitedFacts.push(facts[i] + "!!!");
    i++;
  }
  return excitedFacts;
}

function iLoveTheBeatles(num){
  var beatleMania = []
  do {
    beatleMania.push("I love the Beatles!")
    num ++;
  } while (num <15);
  return beatleMania;
}
