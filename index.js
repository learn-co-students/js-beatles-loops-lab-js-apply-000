function theBeatlesPlay(musicians, instruments){

  var arr = []

  for(var i = 0; i < musicians.length; i++){
    var str = musicians[i] + " plays " + instruments[i]
    arr[i] = str
  }

  return arr
}

function johnLennonFacts(facts){
  var index = 0
  var arr = []

  while (index < facts.length) {
    arr[index] = facts[index] + "!!!"
    index = index + 1
  }

  return arr
}

function iLoveTheBeatles(number){
  var arr = []

  do {
    arr.push("I love the Beatles!")
    number += 1
  } while (number < 15)

  return arr
}
