var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i=0; i<4; i++) {
      newArray.push(musicians[i] + " plays " + instruments[i]);
    }
  return newArray;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array) {
  var newJohnArray = [];
  var i = 0 ;
  while (i < array.length) {
    newJohnArray.push(array[i] + "!!!");
    i++;
  }
  return newJohnArray;
}

function iLoveTheBeatles(n) {
  var newLoveBeatles = [];
  var n
  do {
    newLoveBeatles.push("I love the Beatles!")
    n++;
  } while (n<15);
  return newLoveBeatles;
}
iLoveTheBeatles(17);
