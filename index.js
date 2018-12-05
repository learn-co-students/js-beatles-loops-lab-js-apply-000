function theBeatlesPlay(musicians_array, instruments_array) {
  var whoplayswhich = []
  for (var i=0; i<musicians_array.length; i++) {
    var string = musicians_array[i] + ' plays ' + instruments_array[i]
    whoplayswhich.push(string)
  }
  return whoplayswhich
}
theBeatlesPlay(["John Lennon", "Paul McCartney"], ['guitar', 'drums'])
function johnLennonFacts(facts_array) {
  var i = 0
  while (i<facts_array.length) {
    facts_array[i] = facts_array[i] + '!!!'
    i++
  }
  return facts_array
}
johnLennonFacts([
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
])
function iLoveTheBeatles(number) {
  var beatleslove = []
  do {
    beatleslove.push('I love the Beatles!')
    number++
  } while (number<15)
  return beatleslove
}
iLoveTheBeatles(6)