function theBeatlesPlay(musicians, instruments) {
  var anArray = []
  for(let i = 0; i<musicians.length; i++) {
   anArray.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
  return anArray
}

function johnLennonFacts(array) {
  let index = 0
  while (index<array.length) {
    array[index] = array[index]+"!!!"
    index++
  }
  return array
}

function iLoveTheBeatles(num) {
   var emptyArray = []
   while(num<15) {
   for (let i = 0; i<num + 1; i++) {
    emptyArray.push("I love the Beatles!")
  }
  return emptyArray
  }
   emptyArray.push("I love the Beatles!")
   return emptyArray
}