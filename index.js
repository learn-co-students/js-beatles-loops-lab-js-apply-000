function theBeatlesPlay(musicians, instruments){
  var array = [];
  var i;
  for(i = 0; i < musicians.length; i++){
    array[i] = musicians [i] + ' plays ' + instruments [i];
  }
  
  return array;
  
}

function johnLennonFacts(facts){
  var i = 0;
  var add = '!!!';
  var newEntry;
  while(i < facts.length){
    newEntry = facts[i].concat(add);
    facts[i] = newEntry;
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  var i = 0;
  
  do{
    array[i] = 'I love the Beatles!';
    i++;
    
  } while (i <= number && number < 15)
  
  return array;
}
