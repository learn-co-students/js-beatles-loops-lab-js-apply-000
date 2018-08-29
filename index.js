
const beatles = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo Starr'
];
const instruments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums'
];
var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
];
var beatlesPlay = []
var i

function theBeatlesPlay() {
  for (i = 0; i < beatles.length; i++){
  beatlesPlay[i] = beatles[i] + ' plays ' + instruments[i]
  }
  return beatlesPlay
}

function johnLennonFacts(facts) {
  i = 0
  while (i < facts.length){
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}


function iLoveTheBeatles(n){
  if (n < 15) n = 15
  var beatlesLuv = []
  i = 0
  do {
    beatlesLuv[i] = 'I love the Beatles!'
    i++
  } while (i < n)
  return beatlesLuv
}
