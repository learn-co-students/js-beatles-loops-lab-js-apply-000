// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
    return array
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (facts.length > i) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++
  }
  while (number<15)
  return array
}
