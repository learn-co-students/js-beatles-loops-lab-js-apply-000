function theBeatlesPlay(musicians, instruments) {
  const array = []
  //sets an array
  for (let i = 0, i < musicians.length; i++) {
    //for every value less than musicians.length
    array.push(`${musicians[i]} plays ${instruments[i]}`)
    //add that the musician at juncture "i" in the musicians Array "plays" the instrument at juncture "i" in the instruments array
  }

  return array
  //return our array with the added values
}

function johnLennonFacts(facts) {
  const factxclamation = []
//set array of facts as empty
  let i = 0
  //set variable for the while loop
  while (i < facts.length) {
    factxclamation.push(`${facts[i]}!!!`)
    i++
    //for ever value i in the facts array, add that value with exclamation points to factxclamation
  }

  return factxclamation
  //spit out factxclamation
}

function iLoveTheBeatles(n) {
  const array = []
//sets up the array as blank
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
//returns i love the beatles 1 more time than the number entered, and only once if number entered is above 15
  return array
}
