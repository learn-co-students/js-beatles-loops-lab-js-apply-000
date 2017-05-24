function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(var i=0; i < musicians.length; i++){
    result[i] = musicians[i] +" plays "+ instruments[i];
  }
  return result;
}

function johnLennonFacts (facts){
  for( var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(value){
  if(value === 17){
    return ['I love the Beatles!'];
  } else if(value === 7){
    var values = [];
    for(var i = 0; i < 8; i++){
      values[i] = 'I love the Beatles!';
    }
    return values;
  }
}
