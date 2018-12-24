// add solution here
// add solution here

var musicians = [ "John Lenon", "Paul McCartney",  "George Harrison", "Ringo Starr"]

var insturments = [ "Guitar", "Bass Guitar", "Lead Guitar", "Drums",]


function theBeatlesPlay(musicians, insturments){
  var lineUp = [];
  for(var i = 0; i < 4; i++) {
    lineUp.push(musicians[i] + ' plays ' + insturments[i]);
  }
  return lineUp;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
   var factsList = []; 
   let i = 0; 
   while(i < facts.length) {
     factsList.push(`${facts[i]}!!!`)
     i++; 
   }
   return factsList; 
 }


function iLoveTheBeatles(n){
  var array = [];
  
  do {
    array.push('I love the Beatles!');
    n++
  } while (n < 15);
  
  return array;
}