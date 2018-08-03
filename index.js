// add solution here

function theBeatlesPlay(musicians, instruments) {
  var x = []
  for (let z = 0; z < 4; z++){
  x.push(`${musicians[z]} plays ${instruments[z]}`)
  }
  return x
}

 function johnLennonFacts(array) {
	var i = []
	while (array.length > 0) {
		i.unshift(`${array.pop()}!!!`)
	}
  return i
}

function iLoveTheBeatles(n) {
  var i = []
  do {
    i.push("I love the Beatles!")
    ++n} while (n < 15);
  return i
}

