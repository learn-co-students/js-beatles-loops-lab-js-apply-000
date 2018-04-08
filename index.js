function theBeatlesPlay(musicians,instruments){
  var bandLength = musicians.length;
  var roles = [];
  for (var i = 0; i<bandLength;i++){
    roles[i] = musicians[i] + " plays " + instruments[i];
  }
  return roles;
}

function johnLennonFacts(facts){
  var factsLength = facts.length;
  var i = 0;
  while (i<factsLength){
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles (num){
  var resultArray = [];
  var index = 0;
  do {
    resultArray[index] = "I love the Beatles!";
    index ++;
    num ++;
  } while (num <15)
  
  return resultArray;
}