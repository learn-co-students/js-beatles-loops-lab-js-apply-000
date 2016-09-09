var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musician, instrument) {
  var collection = [];
  for (var i = 0; i < musicians.length; i ++) {
    collection[i] = musicians[i] + " plays " + instruments[i];
  }
  return collection;
};


var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
function johnLennonFacts(facts) {
  var exclamation = [];
  var i = 0;
  while (i < facts.length) {
    exclamation.push(facts[i] + "!!!");
    i += 1;
  }
  return exclamation;
};

var number = '';
function iLoveTheBeatles(number) {
  var i = 0;
  var newArray = [];
  do {
    newArray[i] =  "I love the Beatles!";
    i += 1;
    number +=1;
  } while (number < 15);
  return newArray;
}
