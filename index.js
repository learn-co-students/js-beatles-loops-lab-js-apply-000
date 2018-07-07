function theBeatlesPlay (musicians, instruments) {
 var new_array = []; 
 for (let i = 0; i < musicians.length; i++) {
 new_array.push(`${musicians[i]} plays ${instruments[i]}`)
 }
 return new_array
}
function johnLennonFacts (facts) {
  var new_array = []
  let i = 0
  while (i < facts.length) {
   new_array.push(`${facts[i]}!!!`)
   i++
  }
  return new_array
}
function iLoveTheBeatles (n) {
  var new_array = [];
  do {
    new_array.push('I love the Beatles!')
    n++
  } while(n < 15)
  return new_array
}