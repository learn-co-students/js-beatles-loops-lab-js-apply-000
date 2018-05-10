function theBeatlesPlay(musicians,instruments){
  var array = [];
  for(var i=0; i<musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(fact){
  var facts = [];
  var i = 0;
  while (i<fact.length){
    facts[i] = fact[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var number = [];
  var i = 0;
  do{
    number[i] = "I love the Beatles!";
    i++;
  } while(i<=num && num<15);
  return number;
}





