// add solution here
var musicians, instruments;

musicians = ["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"];

instruments = ["guitar", "bass", "drums", "guitar"]

function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var results = []
  for (let i = 0; i < arrayMusicians.length; i++){
  var band = `${arrayMusicians[i]} plays ${arrayInstruments[i]}`
  results.push(band);
  }
  return results;
}

console.log(theBeatlesPlay(musicians, instruments));

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(arrayFacts) {
  let i = 0;
  let results = []
  while (i < arrayFacts.length) {
    let value = arrayFacts[i];
    i++
   results.push(`${value}!!!`);
  } 
  return results;
} 

console.log(johnLennonFacts(facts));

function iLoveTheBeatles(array1) {
  let results = [];
  do {
  results.push(`I love the Beatles!`);
  array1 += 1; 
  } while (array1 < 15);
  return results;
}

console.log(array1);