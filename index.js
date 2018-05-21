function theBeatlesPlay(musicians, instruments){
  var artistInstru = [];
  
  for(var i = 0; i < musicians.length; i ++){
    var musician = musicians[i];
    var instrument = instruments[i];
    
    artistInstru.push(musician + " plays " + instrument);
  }
  
  return artistInstru;
}

function johnLennonFacts(facts){
 var johnFacts = [];
 var i = 0;
 
 while ( i < facts.length){
   johnFacts.push(facts[i] + "!!!");
   i++;
 }
 return johnFacts;
}

function iLoveTheBeatles(num){
  var array = [];
  var i = num;
  do {
    array.push("I love the Beatles!");
    i++;
}
while (i < 15);

return array;  
}