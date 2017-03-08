function theBeatlesPlay(musicians, instruments) {
  const plays = []; // creates the empty array
  var arrayLength = musicians.length; // sets the array length for the for loop
  for (var i = 0; i < arrayLength; i++) { // creates the for loop
    plays.push(`${musicians[i]} plays ${instruments[i]}`) // pushes the new strings into the new array
  }
  return plays // returns the new array
}

function johnLennonFacts(facts) {
  const jlFacts = [];
  var index = 0;
  while (index < facts.length) {
    jlFacts.push(`${facts[index]}!!!`)
    index++
  }
  return jlFacts
}

function iLoveTheBeatles(number) {
  const array = [];
  do {
    array.push(`I love the Beatles!`)
    number++
  } while (number < 15);
  return array
}