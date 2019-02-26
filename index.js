function theBeatlesPlay(musicians, instruments){
  var musiciansWithInstruments = [];
  for(var i = 0; i < musicians.length; i++){
    musiciansWithInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansWithInstruments;
}

//function johnLennonFacts
function johnLennonFacts(facts){
  for(var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + '!!!';
  }
  return facts;
}
//function iLoveTheBeatles
function iLoveTheBeatles(num){
  var loveArray = [];
  do{
    loveArray.push("I love the Beatles!");
    num++;
  }while(num < 15);
  
  return loveArray;
}