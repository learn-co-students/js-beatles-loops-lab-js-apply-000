
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
const facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'
];
var beatlesPlay = []
var i
var num = 15


function theBeatlesPlay() {
  for (i = 0; i < beatles.length; i++){
  beatlesPlay[i] = beatles[i] + ' plays ' + instruments[i]
  }
  return beatlesPlay
}


////////////////////////////////////

function johnLennonFacts() {
  i = 0
  while (i < facts.length){
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}




function iLoveTheBeatles() {
  var beatlesLuv = []
  i = 0
  do {i = i + 1
    beatlesLuv[i] = 'I love the Beatles!'
  } while (i < num)
}
