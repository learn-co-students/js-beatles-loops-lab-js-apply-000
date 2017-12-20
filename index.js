const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  let strings = [];
  for(let i = 0; i < musicians.length; i++) {
    strings.push(musicians[i] + " plays " + instruments[i]);
  }
  return strings;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  
function johnLennonFacts(facts) {
  let i = 0
  let strings = [];
    while( i < facts.length) {
      strings.push(facts[i] + "!!!");
      i++;
    }
    return strings
}

function iLoveTheBeatles(number) {
  var bit = number;
  let strings = []
    do { strings.push("I love the Beatles!");
    bit++;
    } while (bit < 15);
    return strings
}

