function theBeatlesPlay (musicians, instruments) {
  
  var outputArray = [];
  
  for (var i = 0; i < musicians.length; i++) {
    outputArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return outputArray;
}



function johnLennonFacts (facts) {
  
  var factsOutput = [];
  var i = 0;
  
  while (facts.length > factsOutput.length) {
    factsOutput.push(facts[i] + "!!!");
    i++;
  }
  
  return factsOutput;
  
}



function iLoveTheBeatles (num) {
  
  var loveOutput = [];
  
  do {  
    loveOutput.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return loveOutput;
}









