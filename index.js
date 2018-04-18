function theBeatlesPlay(musicians, instruments) 
{
    var arrayStrings = []
    for (var i=0; i < musicians.length; i++) {
      arrayStrings.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return arrayStrings
}

function johnLennonFacts(facts) 
{
  var i = 0
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num) 
{
  var array = []
  var i = 0
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15)
  return array 
}