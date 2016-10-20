function theBeatlesPlay(artist, instrument) {
  var output = []
  for (var i = 0; i < artist.length; i++) {
    output.push(`${artist[i]} plays ${instrument[i]}`)
  }
  return output
}

function johnLennonFacts(arr) {
  var output = []
  var i = 0
  while (i < arr.length) {
    output.push(`${arr[i]}!!!`)
    i++
  }
  return output
}

function iLoveTheBeatles(n) {
  var output =  []
  do {
    output.push("I love the Beatles!")
    n++
  } while (n < 15)

  return output
}
