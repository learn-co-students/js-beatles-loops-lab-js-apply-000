const mus = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const inst = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var theBeatlesPlay = function(musicians, instruments) {
  var emptyArr = [];
  for(var i = 0; i < musicians.length; i++) {
    emptyArr.push(musicians[i] + " plays " + instruments[i]);
    }
    return emptyArr;
  }

const lennon = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var johnLennonFacts = function(arr) {
  var facts = [];
  var k = 0;
  while (k < arr.length) {
    facts.push(arr[k] + "!!!");
    k++
  }
  return facts;
}

var iLoveTheBeatles = function(num) {
  var arr = [];
  var h = 0;
  if (num < 15){
    do {
      arr.push("I love the Beatles!");
      h++;
    }
    while (h <= num);
  }
  if (num > 15) {
    arr.push("I love the Beatles!");
  }
  return arr;
}
