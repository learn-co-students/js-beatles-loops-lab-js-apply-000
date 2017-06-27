function theBeatlesPlay(musicians, instruments) {

  var emparr = []

  for (var i = 0; i < musicians.length; i++){
    emparr.push(musicians[i] + " plays " + instruments[i])
  }

return emparr

}


function johnLennonFacts(facts) {
  var i = 0
  var newfacts = []
  while (i < facts.length) {
    newfacts.push(facts[i] + "!!!");
    i++;
  }
  return newfacts
}

function iLoveTheBeatles(n) {
  var barr = []
  do {
    barr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return barr
}
