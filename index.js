// add solution here

function theBeatlesPlay (musicians,instruments){
var array =[];
for (var i = 0; i < 4; i++) {
    array.push (musicians[i] + " plays " + instruments[i])
} return array
}

function johnLennonFacts (facts) {
 var truth = [];
 var j = 0;
  while (j< facts.length) {
    truth.push (facts[j]+ "!!!");
    j++;
  } return truth;
  }

function iLoveTheBeatles (number){
  var empty =[]
  do {
    empty.push ("I love the Beatles!")
    number ++
  } while (number<15);
  return empty
}
