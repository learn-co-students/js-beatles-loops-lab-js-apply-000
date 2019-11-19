// add solution here
function theBeatlesPlay (musicians, instruments){
  var beatlesPlay = []
  for (var i=0 ; i<musicians.length ; i++){
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesPlay
}


function johnLennonFacts(facts){
  var excitingFacts=[]
  var i = 0
  while (i < facts.length){
    excitingFacts.push(`${facts[i]}!!!`)
    i++
  }
  return excitingFacts
}

//come back to try to do the above without making a new array 

function iLoveTheBeatles(number){
  var howMuchLove=[]
  do {
    howMuchLove.push("I love the Beatles!")
    number++
  }
  while (number<15)
  return howMuchLove
}






