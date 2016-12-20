'use strict';

function theBeatlesPlay(musicians,instruments) {
  var output = [];
  for (var i = 0; i<4; i++) {
    output[i] = musicians[i] + " plays " + instruments[i];
  }
  return output;
}

theBeatlesPlay(["John Lennon","Paul McCartney","Ringo Starr","George Harrison"],["rhythm guitar","bass guitar","drums","lead guitar"])

function johnLennonFacts(facts) {
  var i = 0
  while (i<facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

johnLennonFacts(["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"])

function iLoveTheBeatles(n) {
  var output = [];
  var i = 0
  do {
    output[i] = "I love the Beatles!";
    i++
  } while (i<=n && n<15);
  return output;
}

iLovetheBeatles(7)

iLovetheBeatles(17)
