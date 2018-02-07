// test 1
var instruments = ['Guitar', 'Bass', 'Lead Guitar', 'Drums'];
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];

function theBeatlesPlay(musicians, instruments) {
   var newArray = [];
   for (var i = 0; i < instruments.length; i++) {
     newArray.push(`${musicians[i]} plays ${instruments[i]}`)
   } return newArray;
}

// test 2
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
   var newFacts = [];
   var i = 0;
   while (i < facts.length) {
     newFacts[i] = facts[i] + '!!!';
     i++
   } return newFacts;
}


// test 3
var n = 7;

function iLoveTheBeatles(n) {
  var lastArray = [];
  do {
    lastArray.push('I love the Beatles!')
    n++
  } while (n < 15)
  return lastArray;
}



