function theBeatlesPlay(musicians, instruments) {
  let groupmusicians = [];
  for (let x = 0; x < musicians.length; x++) {
    groupmusicians.push(musicians[x] + " plays " + instruments[x]);
  }
return groupmusicians;
}

function johnLennonFacts() {
  facts = ['He was the last Beatle to learn to drive','He was never a vegetarian',
 'He was a choir boy and boy scout', 'He hated the sound of his own voice'];
  newfacts = [];
  x = 0
 while (x < facts.length) {
   newfacts.push(facts[x] +"!!!")
   x++;
 } return newfacts;
}

function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push("I love the Beatles!");
    nmu++
  } while (num < 15);
  return phrases;
}
