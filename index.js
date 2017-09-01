function theBeatlesPlay(musicians, instruments) {
var arraytofill = [];
for (var i = 0; i < musicians.length; i++) {
arraytofill.push(`${musicians[i]} plays ${instruments[i]}`);
}
return arraytofill;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
var arraywithfacts = [];
var i = 0;
while (i < facts.length) {
  arraywithfacts.push(`${facts[i]}!!!`);
  i++;
}
  return arraywithfacts
}



function iLoveTheBeatles(n) {
  var emptyarray = [];
  do {
    emptyarray.push(`I love the Beatles!`);
    n++;}
    while (n < 15);
  return emptyarray
}
