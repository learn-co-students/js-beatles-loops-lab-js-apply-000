function theBeatlesPlay(musicians,instruments) {
  var result = []
  for (var i = 0; i< musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(array) {
  var j = 0
  while (j < array.length) {
    array[j] = array[j] + "!!!"
    j += 1
  }
  return array
}

function iLoveTheBeatles(number) {
  var array =[]
  do {
    array.push("I love the Beatles!")
    number +=1 
  } while (number<15)
  return array
}