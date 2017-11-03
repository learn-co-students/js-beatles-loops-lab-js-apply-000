'use strict';

function theBeatlesPlay(musicians, instruments) {
   var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(arr) {
 var newFacts = [];
    var i = 0;
    while (i < arr.length) {
        newFacts.push(arr[i] +"!!!");
        i++;
    }
    return newFacts;
}

johnLennonFacts(facts);

function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrases;
}
