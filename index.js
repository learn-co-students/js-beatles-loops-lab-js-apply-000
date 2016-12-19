var musicians = ['George Harrison', 'Paul McCartney', 'John Lennon', 'Ringo Starr'];
var instruments = ['Lead Guitar', 'Bass', 'Rhythm Guitar', 'Drums'];

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var i = 0;
  var newArray2 = [];
  while(i < facts.length) {
    newArray2.push(`${facts[i]}!!!`);
    i++;
  }
  return newArray2;
}

function iLoveTheBeatles(number) {
  var newArray3 = [];
  do {
    newArray3.push('I love the Beatles!');
    number++;
  } while(number < 15);
  return newArray3;
}
