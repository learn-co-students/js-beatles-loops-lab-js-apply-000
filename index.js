function theBeatlesPlay(musicians, instruments) {
  var newSayings = []
  for (var i = 0; i < musicians.length; i++) {
    newSayings.push(musicians[i] + " plays " + instruments[i])
  }
  return newSayings
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
]
function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while(i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts
}
function iLoveTheBeatles(number) {
  var love = []
do {
  love.push("I love the Beatles!")
  number++
} while(number < 15)
return love
}
