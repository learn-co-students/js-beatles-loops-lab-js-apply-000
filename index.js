function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (let i=0; i<musicians.length; i++) {
    plays[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return plays
}
function johnLennonFacts(arrayOfFacts) {
  let i = 0
  while(arrayOfFacts.length - i > 0) {
    arrayOfFacts[i] = arrayOfFacts[i] + "!!!"
    i++
  }
  return  arrayOfFacts
}
function iLoveTheBeatles(n) {
  var strings = []
  do { 
      strings = ["I love the Beatles!", ...strings]
      n++
  } while (n < 15)
  return strings
}