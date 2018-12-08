// add solution here
'use strict';
function theBeatlesPlay(musicians, instruments) { //step 1
  var emptyArray = []; //step 2
  for (var i = 0; i < musicians.length; i++) { //step 3
   emptyArray.push(musicians[i] + " plays " + instruments[i]); //step 4 and step 5 
  }
  return emptyArray; //step 6
}

function johnLennonFacts(facts) { //step 7
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(num) { //step 1
  var phrases = [];             //step 2
  do {                          
    phrases.push("I love the Beatles!"); //step 3
    num++             
  } while (num < 15);   //step 4 
  return phrases;    //step 5
}