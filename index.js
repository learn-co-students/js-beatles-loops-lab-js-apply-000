// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]; 
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var emptyArr = [];
  var i = 0;
  for(i = 0; i < musicians.length; i++) {
    emptyArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArr;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He hated the sound of his own voice",
  "He thought the Cheeseburger was going to bring world peace",
  "Tacos had the abiltiy to unite humanity"];
  
  function johnLennonFacts(facts) {
    var johnStuff = [];
    var i =0;
    while (i < facts.length) {
    johnStuff.push(facts[i] + "!!!")
    i++;
    }
    return johnStuff;
  }
  
  function iLoveTheBeatles(i) {
    var newArr = [];
    do {
      newArr.push("I love the Beatles!");
      i++;
    } while (i < 15);
    return newArr;
  }