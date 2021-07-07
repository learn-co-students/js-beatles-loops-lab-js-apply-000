// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instrustments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push((musicians[i]) + " plays " + (instruments[i]));
  }
  return beatles;
}


theBeatlesPlay(musicians, instruments);


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var johnFacts = [];
  var i = 0;
  while (i < facts.length) {
    johnFacts.push(facts[i] + "!!!");
    i++;
  }
  
  return johnFacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do { 
    love.push('I love the Beatles!');
    num++;
  } while (num < 15);
  
return love;

}
  