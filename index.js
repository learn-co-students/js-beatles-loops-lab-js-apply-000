function theBeatlesPlay(musicians, instruments) {
  var content = [];
  var i;
  for( i = 0; i < musicians.length; i++) {
    content.push(musicians[i] + " plays " + instruments[i] );
  }
  return content;
}

function johnLennonFacts(facts) {
  const theFacts = []

  let i = 0

  while (i < facts.length) {

    theFacts.push(`${facts[i]}!!!`)
    i++

  }

  return theFacts
}

function iLoveTheBeatles(f) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    f++
  } while ( f < 15)

  return arr
}
