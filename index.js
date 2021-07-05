
function theBeatlesPlay(musicians, instruments) {
  var empty = []
  
  for (let i = 0; i < musicians.length; i++ ) {
  empty.push(musicians[i] + " plays " +  instruments[i]) 
  }
  return empty
}

var facts = [];
        
function johnLennonFacts(facts) {
  var newFacts = []
  var n = 0
  while (n < facts.length)  {
    newFacts.push(facts[n] + "!!!")
    n++;
  }

  return newFacts
}

function iLoveTheBeatles(n) {
  var arrEmpty= []

 do{
    arrEmpty.push("I love the Beatles!")
    n++
  }

  while 
  (n < 15 );
  return arrEmpty
  
}

