function theBeatlesPlay(musicians, instruments){
  var array3 = [];
  for ( var i = 0; i <= musicians.length -1; i++){
    array3[i] = musicians[i] + " plays " + instruments[i];
  }
  return array3;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i <= facts.length - 1){
    facts[i]+="!!!";
    i++
  }
  return facts;
}

function iLoveTheBeatles(num){
  var array1 = [];
  do {
    array1.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return array1;
}
