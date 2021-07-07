function theBeatlesPlay(musicians, instruments){
 var beatlesPlay = [];
 for (var i = 0; i<musicians.length; i++){
   beatlesPlay[i] = musicians[i] + " plays " + instruments[i];
 }
 
 return beatlesPlay;
}

function johnLennonFacts(facts){
  var lennonFacts = [];
  var i = 0;
  while(i<facts.length){
    lennonFacts[i] = facts[i] + "!!!";
    i++;
  }
  
  return lennonFacts;
}

function iLoveTheBeatles(n){
  var ilovethebeatles = [];
  var i = 0;

  do {
    ilovethebeatles[i] = "I love the Beatles!";
    i++;
  } while(i<=n && n < 15);
  
  return ilovethebeatles;
}