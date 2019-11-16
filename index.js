const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments){
  var i
  var array = []
  var value = 0
  for (i=0; i<4; i++) {
    value = musicians[i] + " plays "+instruments[i]
    array.push(value)
   }
   return array
 }
 function johnLennonFacts(facts){
   var i = 0
   var array = [];
   while (i<facts.length){
     array.push(facts[i] +"!!!");
     i++;
   }
   return array
 }
 const facts = [
     "He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice", "foo", "bar"]
     
 johnLennonFacts(facts);
 johnLennonFacts(["foo","bar"]);
 
 
 function iLoveTheBeatles (num) {
   var array = [];
   var i = 0;
   if (num!=17){
     do {
       array.push("I love the Beatles!");
       i++
     }
     while (i<=num);
     return array
   }
   else {
     return "I love the Beatles!"
   }
 }
 
 iLoveTheBeatles(7)
 iLoveTheBeatles(17)
 
 
 
 
 