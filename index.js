// add solution here
function theBeatlesPlay(musicians, instruments){
  var output = []
  
  
  for(var counter = 0; counter < musicians.length; counter++){
    output[counter] = musicians[counter] + " plays " + instruments[counter]
  }
  
  return output
}
function johnLennonFacts(johnlemon){
  var counter = 0
  while(counter < johnlemon.length){
    johnlemon[counter] = johnlemon[counter] + "!!!"
    counter ++
  }
  return johnlemon
}

function iLoveTheBeatles(num){
  var output = []
  var counter = 0
  do {
    output[counter] = "I love the Beatles!"
    counter ++
  }
  while(num < 15 && counter < 15 - num)
  return output
}