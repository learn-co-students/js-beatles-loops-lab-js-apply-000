//  Index.js
//  Created by Charles Albert Samuels on 12.04.16.

//EFFECTS: concatenates the elements of two arrays into a sentence and returns an array of the created sentences
function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles[i] = musicians[i] + " plays " + instruments[i]
  }
  return beatles
}

//MODIFIES: adds three exclamation points to the end of each string in an array
function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++
  }
  return facts
}

//EFFECTS: returns an array with a number of elements as given by a numeric input
//MODIFIES: increments the numeric input at least once until it is >= 15
function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15);
  return array
}
