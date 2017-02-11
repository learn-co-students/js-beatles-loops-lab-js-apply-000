function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array;
}
function johnLennonFacts(array) {
  var n = 0
  while ( n < array.length ) {
    array[n] = array[n] + "!!!"
    n++
  }
  return array
}
function iLoveTheBeatles(n){
  var array = []
  var i = 0
  do {
    array[i] = "I love the Beatles!"
    n++
    i++
  } while ( n < 15 )
  return array;
}