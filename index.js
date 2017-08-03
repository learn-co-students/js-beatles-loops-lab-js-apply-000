const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var combined = [];
  for (var i = 0; i < musicians.length; i++) {
     combined.push(musicians[i] + " plays " + instruments[i]);
   }
   return combined;
 }

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
 function johnLennonFacts(facts) {
   var array = [];
   var i = 0;
   while (array.length < facts.length) {
     array.push(facts[i] + "!!!");
     i++;
   }
   return array;
 }

 function iLoveTheBeatles(num) {
   var obsession = [];
   do {
     obsession.push("I love the Beatles!");
     num++
   } while (num < 15);
   return obsession;
 }
