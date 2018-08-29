
const beatles = [
  'John Lennon',
  'Paul McCartney',
  'George Harrison',
  'Ringo Starr'
];
const instruments = [
  'Guitar',
  'Bass',
  'Lead Guitar',
  'Drums'
];
var beatlesPlay = []
var i = null

function theBeatlesPlay() {
  for (i = 0; i < beatles.length; i++){
  beatlesPlay[i] = beatles[i] + ' plays '  + instruments[i]
  }
  return beatlesPlay[i]
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts() {
  while (i < facts.length){
    facts[i] = facts[i] + "!!!"
  }
}