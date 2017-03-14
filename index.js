function theBeatlesPlay(musicians,instruments){
  var combination = []
  for(var i = 0 ; i<musicians.length;i++){
    combination.push(musicians[i] + " plays " + instruments[i])
  }
  return combination
}

function johnLennonFacts(facts){
  var i = 0
  var x = []
  while(i < facts.length){
    x.push(facts[i]+ "!!!")
    i++
  }
  return x
}

function iLoveTheBeatles(number){
  var empty = []
  do{
    empty.push("I love the Beatles!")
    number++
  }while(number < 15);
  return empty
}