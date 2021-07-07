
function theBeatlesPlay(musicians, instruments){
  var arry = [];
  var i;
  for (i = 0; i < musicians.length; i++){
    arry[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return arry;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length ){
    facts[i] = facts[i]+"!!!"
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var arry = [];
  var i = 0
  do{
    arry[i] = "I love the Beatles!"
    i++;
    num++;
  } while (num < 15)
  return arry;
}