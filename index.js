const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "bass guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(musicians[i]+ " plays "+ instruments[i]);
    }
  return array;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var array = [];
     n=0;
     while (n<4) {
     array.push(facts[n] + "!!!");
     n++;
     }
  return array;  
}
function iLoveTheBeatles(n){
 var array = [];
  do {
    n=array.push("i love beatles");
    n++;
  }
  while(n<15);
   return array;
}