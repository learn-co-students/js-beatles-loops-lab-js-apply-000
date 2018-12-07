// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var name = musicians[i];
    emptyArray.push(`${name} plays ${instruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(array) {
  var finalFacts = []
  var i = 0;
  while (i < array.length) {
    finalFacts.push(array[i] + "!!!")
    i++
  }
  return finalFacts;
}

function iLoveTheBeatles(number) {
  var loveBeatles = [];
  do {
    loveBeatles.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return loveBeatles;
}
