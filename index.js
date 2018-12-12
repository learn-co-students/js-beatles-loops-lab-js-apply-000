// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(var i = 0; i < musicians.length; i++) {
    var s = musicians[i] + " plays " + instruments[i];
     arr.push(s);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while(i < facts.length) {
   var newFacts = facts[i] + "!!!";
   newArray.push(newFacts);
   i++;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var arr = [];
    do  { 
      arr.push("I love the Beatles!"); 
      number++; 
  } while(number < 15);
  return arr;
}
