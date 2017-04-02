function theBeatlesPlay(musicians, instruments){
    var i=0; 
    var bandSetup=[]; 

    for(i=0; i<musicians.length; i++){
      bandSetup[i]=musicians[i]+" plays "+instruments[i]; 
    }

    return bandSetup;
  
}



function johnLennonFacts(LennonFacts){
  var i =0; 

  while(i<LennonFacts.length){
    LennonFacts[i]= LennonFacts[i]+"!!!"; 
    i++; 
  }

  return LennonFacts; 
  
}


function iLoveTheBeatles(n){
    var beatleArray= []; 
    var i=0; 
  do {
      beatleArray[i]="I love the Beatles!";
      i++; 
    } while(i<n+1 && n<15)

    return beatleArray;
}







