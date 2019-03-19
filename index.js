// add solution here

function theBeatlesPlay(musicians,instruments) {
  var whoPlaysWhat=[]
  
  for (var count = 0; count < musicians.length; count++) {
    whoPlaysWhat[count] = `${musicians[count]} plays ${instruments[count]}`
  }
  
  return whoPlaysWhat
}

function johnLennonFacts(facts) {
  var count = 0, aboutJohn = []
  
  while ( count < facts.length ) {
    aboutJohn[count] = facts[count] + "!!!"
    
    count++
  }
  
  return aboutJohn
}

function iLoveTheBeatles(num) {
  var i = 0, loveArray = []
  
  do {
    loveArray[i] = "I love the Beatles!"
    i++
    num ++
  } while (num < 15)
  
  return loveArray
}


