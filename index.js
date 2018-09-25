function theBeatlesPlay(arrayMus, arrayIns){
  var emptyArray = []
  var mus = arrayMus.length
  for (var i = 0; i < mus; i++){
  emptyArray.push(arrayMus[i] + " plays " + arrayIns[i])}
  return emptyArray
}

function johnLennonFacts(facts){
  var i = 0
  var emptyFacts = []
  var fact = facts.length
  
  while (fact > i){
  emptyFacts.push(facts[i]+"!!!");
  i++
  }
  return emptyFacts
}

function iLoveTheBeatles(number){
  var emptyArray = [];
  
  do { emptyArray.push("I love the Beatles!") 
  number++
  } while (number < 15) 
  return emptyArray
  }