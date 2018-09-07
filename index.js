// add solution here
var musicians = ["John Lennon", "Ringo Starr", "George Harrison", "Paul McCartney"];
var instruments = ["Rhythm Guitar", "Drums", "Lead Guitar", "Bass Guitar"];

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayThese = [];
  for (let i = 0; i < 4; i++) {
      theBeatlesPlayThese.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesPlayThese;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var newJLF = [];
  let i = 0;
  while(i < facts.length) {
    newJLF.push(`${facts[i]}!!!`)
    i++;
  }
  return newJLF;
}

function iLoveTheBeatles(number) {
  var iLTB = [];
  do {
    iLTB.push('I love the Beatles!')
    number++;
  }
  while(number < 15)
  return iLTB;
}