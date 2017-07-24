function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i = 0; i < musicians.length; i++){
    var temp = musicians[i] + " plays " + instruments[i]
    arr.push(temp)
  }
  return arr
}

function johnLennonFacts(facts){
  var exc = []
  var i = 0
  while(i < facts.length){
    facts[i] += "!!!"
    exc.push(facts[i])
    i++
  }
  return exc
}

function iLoveTheBeatles(number){
  var i = 0
  var love = "I love the Beatles!"
  var arr = []
  do {
    arr.push(love)
    i++
  } while (i <= number && number <= 15);
  return arr
}
