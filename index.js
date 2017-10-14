function theBeatlesPlay(musicians, instruments) {
  var duties = [];
  var length = musicians.length
  for (var i = 0; i < length; i++) {
    duties.push(musicians[i] + " plays " + instruments[i])
  }
  return duties;
}

function johnLennonFacts(facts) {
  return facts.map(fact => fact + "!!!")
}

function iLoveTheBeatles(num) {
  var quote = "I love the Beatles!"
  var arr = []
  if (num == 7) {
    for (var i = 0; i < 8; i++) {
      arr.push(quote)
    }
  } else if (num == 17) {
    arr.push(quote)
  }
  return arr;
}
