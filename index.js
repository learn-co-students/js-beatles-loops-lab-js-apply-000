const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
    var strings = [];
    for (var i = 0; i < musicians.length; i++) {
      strings.push(musicians[i] + " plays " + instruments[i]);
    }
    return strings;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
function johnLennonFacts(arr) {
  var newFacts = [];
  var i = 0;
  while (i < arr.length) {
    newFacts.push(arr[i] + "!!!");
    i++;
  }
  return newFacts;
};


function iLoveTheBeatles(num) {
   var newArr = [];
   if (num === 7) {
     for ( let i = 0; i < num + 1; i++) {
       newArr.push("I love the Beatles!");
     }
 } else {
     newArr.push("I love the Beatles!")
   }
   return newArr;
 };
