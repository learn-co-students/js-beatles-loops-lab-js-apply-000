function theBeatlesPlay(musicians, instruments){
  var arr = [];
  var i;
  for(i = 0; i<musicians.length; i++){
    arr.push(musicians[i]+" plays "+instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var res = [];
  do { 
    res.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return res;
}
  
