function theBeatlesPlay(musicians, instruments) {
  var result = [];
  
  for (let i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    
    var string = `${musician} plays ${instrument}`;
    
    result.push(string);
  }
  
  return result;
}

function johnLennonFacts(facts) {
  var result = [];
  let i = 0;
  
  while (i < facts.length) {
    var fact = facts[i];
    var string = `${fact}!!!`;
    result.push(string);
    i++;
  }
  return result;
}

function iLoveTheBeatles(num){
  var result = [];
  
  do {
    result.push("I love the Beatles!")
    num ++
  } while (num < 15)
  
  return result
}