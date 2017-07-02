// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}
//------------------------------------------------
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(fact) {
  var jLFacts = [];
  var i = 0;
  while (i < fact.length) {
    var exclamation = fact[i] + "!!!";
    jLFacts.push(exclamation);
    i++;
  }
  return jLFacts;
}

johnLennonFacts(facts);
johnLennonFacts('foo');
johnLennonFacts('bar');
//-----------------------------------
function iLoveTheBeatles(numbers) {
  var howMuch = [];
  do {
    howMuch.push('I love the Beatles!');
    numbers++;
  }
  while (numbers < 15);
  return howMuch;
}
