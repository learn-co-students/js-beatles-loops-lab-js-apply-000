// add solution here
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
var beatles = [];

function theBeatlesPlay() {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatles;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (newFacts.length < facts.length) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}

johnLennonFacts(facts)


function iLoveTheBeatles(x) {
  var loveArray = [];
  do {
    loveArray.push('I love the Beatles!');
    x++;
  } while (x < 15) {
    
  }
  return loveArray;
}

iLoveTheBeatles(0)