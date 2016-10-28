function theBeatlesPlay(musicians, instruments){
  var arr1 = []
  for (var i = 0; i < musicians.length; i++){
    var str = musicians[i]
    str = str + " plays " + instruments[i]
    arr1.push(str)
  }
  return arr1
}

function johnLennonFacts(facts){
  var i = 0
  while(i < facts.length){
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var arr2 = []
  do{
    arr2.push("I love the Beatles!")
    number = number + 1
  }
  while(number < 15)
  return arr2
}
