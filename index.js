function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(things){
  const facts = [];
  for(var i = 0; i < things.length; i++){
    facts.push(things[i] + "!!!");
  }
  return facts;
}

function iLoveTheBeatles(number){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return arr;
}
