// add solution here
function theBeatlesPlay(musicians, instruments) {
  var empty = [] 
  for (var i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`) 
  } return empty
}
function johnLennonFacts(array) {
  var facts = [];
  var i = 0
while (i < array.length) {facts.push(`${array[i]}!!!`)
i++ }
return facts
}
function iLoveTheBeatles(num) {
  const arr = []
do {arr.push("I love the Beatles!"); num++}
  while (num < 15)
  return arr }