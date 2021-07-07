// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  let beatles = [];
  
  for (let i = 0; i <= musicians.length-1; i++) {
    beatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(array) {
  let newFacts = [];
  let counter = 0;
  while (counter <= array.length - 1) {
    newFacts.push(array[counter] + '!!!');
    counter++
  }
  
  return newFacts;
}

function iLoveTheBeatles(num) {
  let array = [];
  do {
    array.push('I love the Beatles!');
    num++;
  } while (num < 15);
  
  return array;
}






