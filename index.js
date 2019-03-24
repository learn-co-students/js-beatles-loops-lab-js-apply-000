// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emptyarray = [];
    for (var i = 0; i < musicians.length; i++) {
      var anything = `${musicians[i]} plays ${instruments[i]}`
      emptyarray.push(anything)
  }
  return emptyarray
}


function johnLennonFacts(facts) {
  var emptyarray = []
    for (var i = 0; i < facts.length; i++) {
      var string= `${facts[i]}!!!`
        emptyarray.push(string)
  }
  return emptyarray
}

function iLoveTheBeatles(n) {
  var emptyarray = []
    while (n < 15) {
      var string = "I love the Beatles"
      emptyarray.push(string)
      n--
  }
  return emptyarray
}
