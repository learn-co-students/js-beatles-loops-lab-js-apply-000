function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var array2 = []
  var i = 0
  while (array2.length != array.length) {
    array2.push(`${array[i]}!!!`)
    i++
  }
  return array2
}

function iLoveTheBeatles(number) {
  var array = []
  do
  {
    array.push("I love the Beatles!")
    number++
  }
  while(number < 15)
  return array
}
