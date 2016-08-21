var theBeatlesPlay = function(musicians, instruments){
var myArray = []
for(var i=0; i<musicians.length; i++){
  myArray.push(musicians[i] + " plays " + instruments[i])
}
return myArray
}

var value = theBeatlesPlay(['John'], ['guitar'])

var johnLennonFacts = function(facts){
var factsArray = []
for(var i=0; i<facts.length; i++){
  factsArray.push(facts[i] + "!!!")
}
return factsArray
}
var value = johnLennonFacts(["He was the last Beatle to learn to drive"])

var iLoveTheBeatles = function (integer){
var numberArray = [];
do{
    numberArray.push("I love the Beatles!")
    integer++;
  }while (integer<15)
  return numberArray
}
