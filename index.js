// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var newArray = [];

function theBeatlesPlay(musicians,instruments) {
   for (var x=0;x<=musicians.length-1;x++){
    newArray.push((musicians[x]+" plays "+instruments[x]));
   }
   return newArray;
 }
var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

 function johnLennonFacts (facts) {
   var newArrayTwo = [];
   var i=0;
   while (i<facts.length) {
     newArrayTwo.push(facts[i] + "!!!");
     i++;
   }
   return newArrayTwo;
 }
 
 function iLoveTheBeatles (Number) {
   var newArrayThree = [];
   do {
     newArrayThree.push ("I love the Beatles!");
     Number++;
   } while (Number<15); 
   return newArrayThree;
 }