
function theBeatlesPlay(musicians, instruments) {
  var list = []
  for (var i = 0; i < musicians.length; i++) {
    list.push(musicians[i] + " plays " + instruments[i])
  }
  return list
}

theBeatlesPlay(["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]);


function johnLennonFacts(facts) {
  var array = []
  var i = 0
  while (i < facts.length) {
    array.push(facts[i] + "!!!")
    i++
  }
  return array
}

johnLennonFacts([
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]);


function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!")
    n++
  } while (n < 15)
  return array
}

iLoveTheBeatles(7);
