function theBeatlesPlay(music,play){
  var link =  []
  for(var i = 0; i <music.length; i++){
     link.push(music[i] +" plays "+ play[i])
  }
  return link
}

function johnLennonFacts(facts){
var copy =  []
var j = 0

while(j<facts.length){
  copy.push(facts[j]+"!!!")
  j++
}
return copy
}

function iLoveTheBeatles(love){
  var n = 0
  var beatles = []

    do{
        beatles.push("I love the Beatles!")
        n++
    }
    while(n<=love && love<15)
  return beatles
}
