 function theBeatlesPlay(musicians, instruments){
    const facts = []
   for(var i = 0; i < musicians.length; i++){
      facts[i] = musicians[i] + " plays " + instruments[i]
   }
   return facts
 }
function johnLennonFacts (facts){
  var i = 0
  var finalFacts = []
  do{
    finalFacts[i] = facts[i] + "!!!";
    i++
  }
  while(i < facts.length)

  return finalFacts
}

function iLoveTheBeatles(number){
  var number = parseFloat(number)
  var empty = []
  var i = 0
  do{
    empty[i] = "I love the Beatles!"
    number++
    i++
  }
  while(number < 15)

  return empty
}
