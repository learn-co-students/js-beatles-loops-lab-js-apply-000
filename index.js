// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr
}

function johnLennonFacts(facts) {
  var i = 0
  var newFacts = []
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts
}


function iLoveTheBeatles(value) {
  var newArray = []
  do {
    newArray.push(`I love the Beatles!`);
    value++;
  } while (value < 15);
  
  return newArray;
}









