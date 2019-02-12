// add solution here
function theBeatlesPlay(muscians, instruments){
 var counters = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 var counters2 = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
 var counters3 = [];
  for (var i = 0; i < muscians.length ; i++) {
    counters3.push(counters[i] + " plays " + counters2[i]) }  
  return counters3;
}

function johnLennonFacts(xFacts){
   var counter = 0;
   var facts2 = [];
    while (counter < xFacts.length){
  facts2.push(xFacts[counter] + "!!!"); counter++} 
   return facts2;
}

function iLoveTheBeatles(music){
   var list = [];
    do{
      list.push("I love the Beatles!"); music++} 
    while (music < 15);
    return list;
}

