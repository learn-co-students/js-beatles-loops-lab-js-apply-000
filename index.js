// add solution here

function theBeatlesPlay(musicians, instruments){
  var content = []
  for(var i = 0; i < musicians.length; i++){
    // pushes array contents into  one variable
    content.push(musicians[i] +" plays " + instruments[i])
  }
  return content
}

function johnLennonFacts(facts){
  var i = 0
  var factuals = []
  while (i < facts.length) {
    factuals.push(facts[i] += "!!!");
    i++;
}
return factuals
}

function iLoveTheBeatles(number){
  var content = []
  do {
    content.push("I love the Beatles!")
    number++
  }
while (number < 15){
  return content
}
  
}