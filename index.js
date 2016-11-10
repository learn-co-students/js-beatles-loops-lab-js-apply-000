function theBeatlesPlay(musicians, instruments){
  var band = [];
  for (var i = 0; i < musicians.length; i++){
    band.push(musicians[i]  + " plays " + instruments[i])
  }
  return band;
}


function johnLennonFacts(facts){
  var factsEx = [];

var i = 0;
while (i < facts.length){
  factsEx.push(facts[i] + "!!!")
  i++
}
return factsEx
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!")
    num++
  }while (num < 15)
  return arr
}
