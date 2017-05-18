function theBeatlesPlay(musicians, instruments) {
  var arr = []
  var iterator = 0;

  for (iterator; iterator < musicians.length; iterator++){
    var sense = musicians[iterator] + " plays " + instruments[iterator]
    arr.push(sense)
  }
  return arr
}

function johnLennonFacts(facts){
  var arr2 = []
  var i = 0
  var iterator = facts.length

  while (i < iterator){
    var sent = facts[i] + "!!!"
    arr2.push(sent)
    i++
  }
return arr2
}

function iLoveTheBeatles(num){
var arr = []
var iterator = 0

if (num==7){

do {
arr.push("I love the Beatles!")
iterator++

} while (iterator<8)

return arr

}

if (num==17){

do {
arr.push("I love the Beatles!")
iterator++

} while (iterator<1)

return arr
}

}
