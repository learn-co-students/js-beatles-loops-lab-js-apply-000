// add solution here
'use strict';

function theBeatlesPlay(musicians, instruments) {
  var Beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    Beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return Beatles;
}

 function johnLennonFacts(exclaim) {
   const arr=["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
    let i = 0;
    while(exclaim.length > i){
      arr.push(`${exclaim[i]}!!!`)
      i++
    }
    return arr }


function iLoveTheBeatles(num) {
  var Saying = [];
  do {
    Saying.push("I love the Beatles!");
    num++
  } while (num < 15);
  return Saying;
} 