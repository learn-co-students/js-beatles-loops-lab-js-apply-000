function theBeatlesPlay(musicians, instruments) {
  const empty =[]
  for(var i = 0; i < musicians.length; i++){
    empty.push(musicians[i] + " plays " + instruments[i])
    }
  return empty
}

function johnLennonFacts(facts){
  const labFacts =[]
  var k = 0
  while (k < facts.length){
    labFacts.push(facts[k]+"!!!")
    k++
  }
  return labFacts
}

function iLoveTheBeatles(number){
  const array =[]
  do{
    array.push("I love the Beatles!")
    number++
  }
  while (number < 15);
  return array
}
