// add solution here


function theBeatlesPlay(musicians, instruments) {
 
 var beatles = []
 
 for (var i=0; i < musicians.length; i++) {
   
   var msg = `${musicians[i]} plays ${instruments[i]}`
   
   beatles.push(msg)
 }
 
 return beatles
  
}

function johnLennonFacts(facts) {
  
  var alteredFacts = []
  
  for (var i=0; i < facts.length; i++) {
    
    alteredFacts.push(`${facts[i]}!!!`)
  }
  
  return alteredFacts
}


function iLoveTheBeatles(num) {
  
  var msgArray = []
  
  do {
  
  msgArray.push("I love the Beatles!")
  
  num++
    
  } while( num < 15)
  
  return msgArray
}

