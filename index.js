function theBeatlesPlay(musicians, instruments){
  const empty =[]
  for (var i = 0, j = musicians.length; i < j; i++){
     empty.push(`${musicians[i]} plays ${instruments[i]}`)
   }
    return empty
}

function johnLennonFacts(facts){
  const givenFacts =[]

  var k = 0
  while(k < facts.length) {
    givenFacts.push(`${facts[k]}!!!`)
    k++
  }
    return givenFacts
}

function iLoveTheBeatles(number){
  const array = []
  //var j = 1
  do {
    array.push('I love the Beatles!')
    number++
  }while (number < 15);

  return array
}
