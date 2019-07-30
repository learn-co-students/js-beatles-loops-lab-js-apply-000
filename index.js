 function theBeatlesPlay(musicians, instruments){
  var theBeatlesPlay = [];
  
   for (var i = 0; i < musicians.length; i++){
    musicians[i]+" plays "+ instruments[i];
     theBeatlesPlay.push(musicians[i]+" plays "+ instruments[i]);
   }
  return theBeatlesPlay;
 }
 
 function johnLennonFacts(factsArray){
    var i=0;
    var facts = [];
      while (i<factsArray.length){
      facts.push(factsArray[i]+"!!!");
      i++;
    }
   return facts;
 }
 
 function iLoveTheBeatles(number){
   var emptyArray = [];
  
   do {
     emptyArray.push("I love the Beatles!")
     number++;
   }
   while (number<15);
   return emptyArray;
   
 }
 