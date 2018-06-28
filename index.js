var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums" ];

theBeatlesPlay(musicians, instruments);
  
function theBeatlesPlay(){
  var emptyArray = [];
  for (var i=0; i < musicians.length; i++) {
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(arr) {
  var listFacts = [];
  var i = 0;
  while (i <arr.length) {
    listFacts.push(arr[i] + "!!!");
    i++;
  }
  return listFacts;
}

johnLennonFacts(facts);

function iLoveTheBeatles(num) {
  let createArray = [];
  do {
    createArray.push('I love the Beatles!');
    num++;
  }
  while (num < 15);
  
  return createArray;
}
