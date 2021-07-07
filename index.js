// add solution here
function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return myArray
}

function johnLennonFacts(facts) {
  var count = 0
  var myArray = []
  
  while (count < facts.length) {
    myArray.push(`${facts[count]}!!!`)
    count += 1
  }
  
  return myArray
}

function iLoveTheBeatles(num) {
  var myArray = []
  
  do {
    myArray.push("I love the Beatles!")
    num += 1
  } while (num < 15)
  
  return myArray
}