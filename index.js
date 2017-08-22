function theBeatlesPlay(musicians, instruments) {
  var songs = [];
  for (var i = 0; i < musicians.length; i++) {
    songs.push(musicians[i] + " plays " + instruments[i]);
  }
  return songs;
};

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  var stringsArray = [];
  var x = 0;
  while (x < facts.length) {
    stringsArray.push(facts[x] + "!!!");
    x++;
  }
  return stringsArray;
};

function iLoveTheBeatles(number) {
var stringsArray = [];
  do {
    stringsArray.push('I love the Beatles!');
    number++;
 } while (number < 15);
  return stringsArray;
}
