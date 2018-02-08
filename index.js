var musicians = ["John Lenon", "Paul McCartney", "Ringo Starr", "George Harrison"];
var instruments = ["guitar", "bass guitar", "drums", "lead guitar"];
var i = 0;

function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = [];
  for(var i = 0; i < musicians.length; i++) {
    beatlesArray.push(musicians[i] + " plays " + instruments[i]);
    }
  return beatlesArray;
}


var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arr) {
  var factsExclamation = [];
  var i = 0;
  while(i < arr.length) {
    factsExclamation.push(arr[i] + "!!!");
    i++;
  }
  return factsExclamation;
}


function iLoveTheBeatles(x) {
  var arr = [];
    do {
      arr.push("I love the Beatles!");
      x++;
    } while (x < 15)
  return arr;
}
