// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (ArrayMusicians,ArrayInstruments){
   var Array = [];
   var MLenght= ArrayMusicians.length;
  
   for (var i=0; i < MLenght; i++){
     Array.push(ArrayMusicians[i] + " plays "+ ArrayInstruments[i]);
   }
   
  return Array;
}
const facts = ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];

function johnLennonFacts (ArrayFacts){
  var i=0;
  var Array=[];
  while (i < ArrayFacts.length){
    Array.push(ArrayFacts[i] + "!!!"); 
    i++;  
  }
  
  return Array;
}

function iLoveTheBeatles (n){
  var Array=[];
  
  do{
    Array.push('I love the Beatles!');
    n++;
  }
  while (n<15);
  
return Array;
}

theBeatlesPlay(musicians, instruments); 
johnLennonFacts(facts); 
iLoveTheBeatles(8);