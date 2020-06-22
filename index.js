// add solution here
var playInstrument = [];
var theBeatlesPlay = function (musician,instrument) {
  for(var i =0;i<musician.length;i++) {
    var plays = musician[i] + " plays " + instrument[i];
    playInstrument.push(plays);
  }
  return playInstrument;
}

function johnLennonFacts(facts) {
  var i = 0;
  var johnFacts = [];
  while(i<facts.length){
    var lennonFacts = facts[i] + "!!!";
    i++;
    johnFacts.push(lennonFacts);
   } 
    return johnFacts;
}

function iLoveTheBeatles(n) {
  var arr = [];
  function printString() {
    arr.push("I love the Beatles!");
  }
  do {
   printString();
   n++;
  }
  while(n<15);
  return arr;
}