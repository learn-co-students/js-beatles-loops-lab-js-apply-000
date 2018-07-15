<<<<<<< HEAD
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var i;
var text;
var finalText;
function theBeatlesPlay (musicians, instruments) {
  for (i = 0; i < musicians.length; i++){
    text = musicians[i] +  "plays" + instruments[i] + " ";
    finalText = text [];
  }
  return text;
}

const facts=[ 
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
function johnLennonFacts(factsArray){
  var i=0;
  var newArray=[];
  while (factsArray.length > i){
    newArray.push(`${factsArray[i]}` + "!!!");
    i++; 
    }
return newArray;
}

function iLoveTheBeatles(n) {
  var strings=[];
  do {
    n++;
    strings.push("I love the Beatles!")
    } 
  while (n < 15);
  return strings;
}
=======
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  var i;
  var j;
  var text = [];
  for (i = 0 && i=0; i < musicians.length && instruments.length; i++){
    text += musicians[i]  + instruments[j] + "<br>";
  }
  return text();
}

>>>>>>> b496cfadbdd0efd6993d4456c42b6dd02b4a9e53
