// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arr = [];
  
  for (var i = 0; i < arrMusicians.length; i++) {
    var str = arrMusicians[i] + " plays " + arrInstruments[i];
    arr.push(str);
  }
  
  return arr;
}

function johnLennonFacts(array) {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  "While on tour, he enjoyed playing Monopoly",
  "Harmonica was the first instrument Lennon learned to play"
  ];
  var newFacts = [];
  
  var i = 0;
  
  while (i < facts.length) {
    var newStr = facts[i] + "!!!";
    
    newFacts.push(newStr);
    i++;
  }

  return newFacts;
 }
 
 function iLoveTheBeatles(number) {
   var arr = [];
   
   var text = "I love the Beatles!";
   var i = 0;
   do {
     arr.push(text);
     i += number;
   }
   while (i < 15);
   
  
   return arr;
 }
 
 
 