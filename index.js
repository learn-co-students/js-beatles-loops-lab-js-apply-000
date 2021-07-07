// The Beatles Play function:
// Setup:
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var newArray = [];

// Function:
function theBeatlesPlay (musicians, instruments) {
  for (var i = 0; i < 4; i++) {
  newArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return newArray;
}



__________;



// John Lennon Facts function:
// Setup:
    var facts = [
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"
    ];

// Function:
// I believe this completes the test but it does not pass...
    function johnLennonFacts (facts) {
      for (var i = 0; i < 4; i++) {
        (facts[i] = facts[i] + "!!!");
        }
        return facts;
    }
    

__________;



// I love the Beatles function:
// Function:
// I believe this completes the test but it does not pass...
    function iLoveTheBeatles (number) {
      var anArray = [];
      do {
        anArray.push("I love the Beatles!");
        number++;
      } while (number < 15);
      return anArray
    }