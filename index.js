const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i=0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts) {
  var jFacts = []
  let i = 0
  while (i < facts.length) {
    jFacts.push(`${facts[i]}!!!`)
    i++
  }
  return jFacts
}

function iLoveTheBeatles(num) {
  var love = []
  do {
  love.push("I love the Beatles!")
  num++
  }
  while (num < 15)
  return love
}