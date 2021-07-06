// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayArray = [];
  for (var i = 0; i < musicians.length; i++){
    theBeatlesPlayArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return theBeatlesPlayArray;
}

function johnLennonFacts(facts) {
  var johnLennonFactsArray = [];
  var i = 0;
  while(i < facts.length){
  johnLennonFactsArray.push(facts[i] + "!!!");
  i++
  }
  return johnLennonFactsArray;
}

function iLoveTheBeatles(number) {
  var iLoveTheBeatlesArray = [];
  do {
    iLoveTheBeatlesArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return iLoveTheBeatlesArray;
}