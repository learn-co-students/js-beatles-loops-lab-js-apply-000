// add solution here

var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  
  for(let i = 0; i <= 3; i++) {
    empty.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return empty;
}

theBeatlesPlay(musicians, instruments);

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let n = 0;
  let newfacts = [];
  while (n < facts.length) {

    newfacts.push(facts[n] + "!!!");
    n++;
  }
  return newfacts;  
}

johnLennonFacts(facts);

function iLoveTheBeatles(num) {
  let emptyArray = [];
  
  do {
    emptyArray.push('I love the Beatles!');
    num++;
    
  } while (num < 15);
 return emptyArray;
}

iLoveTheBeatles(10);







