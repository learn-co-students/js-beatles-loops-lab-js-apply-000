

function theBeatlesPlay(musicians, instruments){
  debugger;
  var result = []
  for (var i = 0; i < musicians.length; i++){
    result.push(musicians[i] + ' plays ' + instruments[i])
  }
  return result
}

function johnLennonFacts(fact){
  var result = [];
  for (var i = 0; i < fact.length; i++){
    result.push(fact[i] + '!!!')
  }
  return result
}


function iLoveTheBeatles(num){
  var result = [];
  var i = num;
  do {
    result.push('I love the Beatles!');
    i++;
  } while (i < 15)
  return result
}
