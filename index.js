// variables
// theBeatlesPlay
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

// johnLennonFacts
var facts = [
  "He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

// functions

function theBeatlesPlay(musicians, instruments) {
    const empty = []
    for ( var i = 0; i<= 3; i++) {
      empty[i]= musicians[i] + " plays " + instruments[i]
    }
    return empty;
  };

  function johnLennonFacts (facts) {
    const answer = []
    var i = 0
    while (i < facts.length) { answer[i] = facts[i] + "!!!"; i++;
  }
   return answer
 }

function iLoveTheBeatles(i) {
  const love = []
  if (i === 7) {
    var i = 0
    do {
      love[i] = "I love the Beatles!";
      i++
  } while (i <= 7);
} else if (i === 17) {
  love[0] = "I love the Beatles!"
} return love
}
