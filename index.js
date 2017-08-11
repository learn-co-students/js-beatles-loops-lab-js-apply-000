function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(let i = 0; i < musicians.length; i++){
    result.push(musicians[i] + " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts){
  var result = [];
  var i = 0;
  while(i < facts.length){
    result.push(facts[i] + "!!!");
    i += 1;
  }
  return result;
}

function iLoveTheBeatles(num){
  var result = [];
  do{
    num += 1;
    result.push("I love the Beatles!");
  } while (num < 15)
  return result;
}
