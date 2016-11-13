function theBeatlesPlay(musicians, instruments){
  var results = [];

  for(var i = 0; i < musicians.length; i++){
    results.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return results;
}

function johnLennonFacts(facts){
  var results = [];

  for(var i = 0; i < facts.length; i++){
    results.push(facts[i] + "!!!");
  }

  return results;
}

function iLoveTheBeatles(num){
  var results = [];

  var i = 0;
  do{
    results.push('I love the Beatles!');
    i++;
  } while(i <= num && num < 15);

  return results;
}
