
var theBeatlesPlay = function (mus, inst){
  var myArray = [];
  var i = 0;
  for (i=0; i< mus.length; i++){
    myArray.push(mus[i] + ' plays ' + inst[i]);
  }
  return myArray
}
var mus = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Star"];
var inst = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var myList = theBeatlesPlay(mus, inst);
var j = 0;
for (j=0; j < mus.length; j++){
console.log(myList[j]);
}
var johnLennonFacts = function(gtFacts){
var factsArray = [];
var i = 0;
for (i = 0; i < gtFacts.length; i++) {
  factsArray.push(gtFacts[i] + "!!!");
}
return factsArray;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var lennonFacts = johnLennonFacts(facts);
console.log(lennonFacts);

var iLoveTheBeatles = function(num){
  var fArray = [];
  var i = num;
do {
    fArray.push("I love the Beatles!");
    i++;
}
while (i < 15);
return fArray;
}

var myStr = iLoveTheBeatles(7);
console.log(myStr);
