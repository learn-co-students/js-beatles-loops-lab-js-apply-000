// add solution here
var musiciansArray = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  
var instrumentsArray = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

var emptyArray = [];

function theBeatlesPlay(musiciansArray, instrumentsArray) {
let emptyArray = [];
  for (let i = 0; i<musiciansArray.length; i++) {
    const str = musiciansArray[i] + " plays " + instrumentsArray[i]; 
    emptyArray.push(str);
  }
return emptyArray;
}

var factsArray = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(factsArray) {
  let emptyArray = []
  var i = 0;
  while (i<factsArray.length) {
  const str = factsArray[i] + "!!!";
  i++;
  emptyArray.push(str)
}
  return emptyArray;
}

function iLoveTheBeatles(i) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!"); 
    i++;
  }
    while (i<15);
  return emptyArray;
}