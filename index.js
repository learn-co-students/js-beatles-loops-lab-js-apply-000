function theBeatlesPlay(musicians, instruments){
  var phrases = []
  var i
  for(i=0; i<musicians.length; i++){
    phrases[i] = musicians[i] + ' plays ' + instruments[i]
  }
  return phrases
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(num){
  var arr = []
  var i = 0
  do {
    arr[i] = "I love the Beatles!"
    i++
    num++
  } while (num < 15)
return arr
}


