// add solution here
function theBeatlesPlay(names, instruments) {
  for (var i=0; i<names.length; i++) {
    names[i] +=" plays " + instruments[i]
  }
  return names
}

function johnLennonFacts(facts){
  var index = 0;
  while(index < facts.length){
    facts[index] = facts[index] + '!!!'
    index = index + 1
  }
  return facts
}
function iLoveTheBeatles(number){
 var returnValue = []
 do {
   returnValue.push("I love the Beatles!") 
   number = number + 1
 }
 while (number < 15)
 return returnValue
}