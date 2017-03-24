function theBeatlesPlay(musicians, instruments){
  var array = []
  var n = 0;
while (n<4){
  array.push(musicians[n] + " plays " + instruments[n])
  n++
}
return array
}

function johnLennonFacts(facts){
  var n=0;
  var factsLoud = []
  while(n < facts.length){
    factsLoud.push(facts[n]+"!!!")
    n++
  }
  return factsLoud
}

function iLoveTheBeatles (n){
  var loveArray = []
  loveArray.push("I love the Beatles!");
  n++
  while (n<15){
  loveArray.push("I love the Beatles!");
  n++
}
return loveArray
}
