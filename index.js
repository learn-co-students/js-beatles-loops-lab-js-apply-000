// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i= 0; i<musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}
//My note:no need to define facts. facts could be any array.
// johnLennonFacts(facts); 

function iLoveTheBeatles (num) {
  var result=[];
  do {
    result.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return result;
}