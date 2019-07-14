// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var musicianInstrument = new Array();

function theBeatlesPlay(musicians, instruments) {
  for (var m = 0; m < musicians.length; m++) {
      musicianInstrument.push(`${musicians[m]} plays ${instruments[m]}`)
      }
      return musicianInstrument
}

var johnLennonFactsArray = new Array();

function johnLennonFacts(array) {
  for (var i = 0; i < array.length; i++) {
    johnLennonFactsArray.push(array[i] + '!!!');
  }
  return johnLennonFactsArray;
}


