function theBeatlesPlay(musicians,instruments){
  var arr = []
  for (var i=0;i<musicians.length;i++){
    arr[i] = musicians[i] + " plays " + instruments[i]
  }
  return arr
}

function johnLennonFacts(facts){
  for(var i=0;i<facts.length;i++){
    facts[i] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(num){
  var arr = []
  if (num >= 15){
    return "I love the Beatles!"
  }
  else{
    for(var i=0;i<=num;i++){
      arr[i]="I love the Beatles!"
    }
    return arr
  }
}
