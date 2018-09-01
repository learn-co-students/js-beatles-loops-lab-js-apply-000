// add solution here

// In the interests of good practice... I am adopting use of let and const
// for variable declaration because they are block scoped

function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i])
  }

  return arr
}


function johnLennonFacts(facts) {
  let i = 0;
  // condition works because anything with a value is TRUE
  while (facts[i]) {
    facts[i] += '!!!'
    i++
  }

  return facts
}


function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push("I love the Beatles!")
    n++
  } while (n<15);

  return arr
}
