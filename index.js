// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 
function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (let i=0; i< musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return beatles
}

facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
        ]

function johnLennonFacts(facts) {
  let i=0
  var extra = []
  while (i<facts.length) {
    extra.push(facts[i] + "!!!");
  i++;
  }
  return extra
}


function iLoveTheBeatles(number) {
  let i = 0;
  var loves = [];
  do {
    loves.push("I love the Beatles!");
  i++;
  }
  while (i<15-number);
  return loves;
}