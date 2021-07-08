// add solution here
var whatTheyPlay = []
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  
var theBeatlesPlay=function(musicians, instruments) {
  for (let counter = 0; counter < 4; counter++) {
    whatTheyPlay.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
  return whatTheyPlay;
}

let facts

var johnLennonFacts = function(facts) {
  var i = 0
  while (i<facts.length) {
    facts[i]= `${facts[i]}!!!`;
    i++
  }
  return facts
}
johnLennonFacts(facts)

let n
iLoveTheBeatles();

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!");
    n = n+1
  } while (n<15);
  return newArray;
}