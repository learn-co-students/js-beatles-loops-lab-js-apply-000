function theBeatlesPlay (musicians, instruments) {
  var array = []
  for ( var i = 0; i < musicians.length; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts (array) {
  var i = 0
  while (array[i]) {
   array[i] = array[i].concat("!!!")
    i++
  }
  return array
}
function iLoveTheBeatles(number) {
  var array = []
  do {
      array.push("I love the Beatles!")
      console.log(array)
      number++
  } while (number < 15)
return array
}
