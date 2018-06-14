const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments) {
  var players = [];
  for (let i = 0; i < musicians.length; i++) {
    players.push(musicians[i] + " plays " + instruments[i]);
  }
  return players;
}

const facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
        ];
        
function johnLennonFacts(arg) {
  var newFacts = [];
  var i = 0;
  while (i < arg.length) {
    newFacts.push(arg[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(i) {
  var myLove = [];
  do {
      myLove.push("I love the Beatles!");
      i++;
  } while (i < 15) ;
  return myLove;
}

