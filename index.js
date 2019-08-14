// add solution here

//concetenates the musician and the instrument and stores
//in new array
function theBeatlesPlay(musicians, instruments) {
  var phrases = []
  var size = musicians.length
  
  for(var i=0; i<size; i++) {
    phrases[i] = musicians[i] + " plays " + instruments[i]
    
  }
  
  return phrases

}

//Adds "!!!" to the end of each fact
function johnLennonFacts(facts) {

  var i=0
  
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  
  return facts

}

//concetenates the musician and the instrument and stores
//in new array
function iLoveTheBeatles(num) {
  var phrases = []
  var diff = 15 - num
  
  var i = 0
  do {
    
    phrases[i] = "I love the Beatles!"
    i++
    
  } while(i<diff)
  
  return phrases
}



