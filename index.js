


// add solution here

function theBeatlesPlay(musicians,instruments) {
  var beatlesAndInstruments=[];
  var i;
  for(i=0; i<musicians.length;++i){
  
  beatlesAndInstruments.push(musicians[i] + " " + "plays" + " " + instruments[i])
  
  }
  
  return beatlesAndInstruments
  
}


function johnLennonFacts(facts) {
  
  
  var i=0;
  
  while(i<facts.length) {
    
    facts[i] = facts[i] + "!!!"
    
    i++
   
  }
  
  return facts
  
}


function iLoveTheBeatles(num) {
  var array = []
  var i = 0
  
  if (num < 15) {
  do {
    array.push("I love the Beatles!")
    i++
  
  } while(i<num+1)

  } else {
    array.push("I love the Beatles!")
  }

  return array
  
  
}


