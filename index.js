
function theBeatlesPlay(musicians, instruments) {
 let emptyArray = []
 for (let i = 0; i < musicians.length; i++) {
  emptyArray.push(musicians[i] + " plays " + instruments[i])
 }
 return emptyArray
}
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]


function johnLennonFacts(facts) {
let newArray = []
let i = 0
while (i < facts.length) {
  newArray.push(facts[i] + "!!!")
  i++
}
return newArray
}

function iLoveTheBeatles(number) {
  let newArray = []
  do {
    newArray.push("I love the Beatles!")
    number++
  } while(number < 15)
  return newArray
}