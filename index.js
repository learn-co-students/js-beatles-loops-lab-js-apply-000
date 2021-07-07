// add solution here
function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for(let mCounter = 0; mCounter < musicians.length; mCounter++) {
    let string = musicians[mCounter] + " plays " + instruments[mCounter];
    array.push(string);
  }
  return array;
}

function johnLennonFacts(facts) {
  var cloneFacts = [];
  var i = 0;
 while (i < facts.length) {
   cloneFacts.push(facts[i] + "!!!");
   i++;
 }  
 return cloneFacts;
}

function iLoveTheBeatles(number) {
 var array = [];
do {
  number++;
  array.push("I love the Beatles!");
} while (number < 15); 
 return array;
}
