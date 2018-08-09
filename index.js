// add solution here
function theBeatlesPlay(musicians,instruments){
    var emptyInfo=[];
    var names;
    
    
    for (names = 0; names< musicians.length; names++) { 
    emptyInfo.push(musicians [names] + " plays " + instruments[names]);
      
    }
    return emptyInfo;
}

function johnLennonFacts(facts){
  var count=0;
  var factiod = facts;
  var newFacts= [];
  while(count < factiod.length){
    var excited = factiod[count] + "!!!";
    newFacts.push(excited);
    count++;
    
  }
  return newFacts;
}

 function iLoveTheBeatles(number){
   var sayIt =[];
   var num=number;
   do {sayIt.push("I love the Beatles!");
     num++;
   }
 
   while (num < 15 );
   
   return sayIt;
   
  
}