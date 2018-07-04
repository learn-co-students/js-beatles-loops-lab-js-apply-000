const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

function theBeatlesPlay(musicians, instruments) {
    var allMusicians = [];
   for (var i=0; i < musicians.length; i++) {
        allMusicians.push(musicians[i] + " plays " + instruments[i]);
    }
    return allMusicians;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while ( i < facts.length ) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(n) {
   var love = [];
  do {
love.push("I love the Beatles!"); n++;
    } while (n < 15);
    return love;
}

