// add solution here
function theBeatlesPlay(musicians, instruments) {
  var bandInfo = []
  
  for(let i = 0; i < musicians.length; i++) {
   var bandMember = `${musicians[i]} plays ${instruments[i]}`
   /*
   using template literals, musicians[i] allows for selecting the element from the array musicians at index [i], which starts at 0 since we set our counter to 0, and each loop adds to the counter so first time is musicians[0], then musicians[1] then musicians[2], etc, until condition is met which is when the the value of i is a higher # then the value of the length of the arrays
   */
   
   bandInfo.push(bandMember)
   /* 
   array.push() method allows for adding an element to the end of an array
   */
  }
  return bandInfo
}

function johnLennonFacts(facts) {
  var lennonFacts = []
  var i = 0
  while (i < facts.length) {
    var exclamation = `${facts[i]}!!!`
    lennonFacts.push(exclamation)
    i++
  }
  return lennonFacts
}

function iLoveTheBeatles(num) {
  var beatlesLove = []
  do {
    beatlesLove.push("I love the Beatles!")
    num++
  } while (num < 15)
  return beatlesLove
}