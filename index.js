// add solution here
const theBeatlesPlay = function(muscians, instruments){
  var newArray = [];
  for (var i = 0; i < muscians.length; i++){
    var string = muscians[i] + " plays " + instruments[i];
    newArray.push(string);
  }
  return newArray;
}

const johnLennonFacts = function(facts) {
  for (var i = 0; i < facts.length; i++){
    facts[i] += "!!!";
  }
  return facts;
}

const iLoveTheBeatles = function(number){
  var newArray = [];
  var count = 0;
  var string = "I love the Beatles!";
  if (number > 15){
    newArray.push(string);
    return newArray;
  }

  do{
    newArray.push(string);
    count++;
  } while (count <= number);
  return newArray;
}