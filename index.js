function theBeatlesPlay(musicians, instruments){
  var i
  var result = []
  for (i = 0; i < 4; i++){
    result[i]  =  musicians[i] + " plays " + instruments[i]
    
  }
  return result
}

function johnLennonFacts(facts){
  var i = 0
  var result = []
 while (i<facts.length){
   result[i] = facts[i] + "!!!";
   i++;
 } 
 return result
}

function iLoveTheBeatles(number){
  var i = 15-number
  var result = []
  var count = 0
  if (number < 15){
    
    do {
    result [count] = "I love the Beatles!"
    count++
    
  }
  while (count < i)
  return result
  }
  else{
    return "I love the Beatles!"
  }
  
}