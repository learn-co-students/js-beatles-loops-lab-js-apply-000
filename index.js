
function theBeatlesPlay(musicians, instruments){
  var music = [];
  for (var i= 0; i < musicians.length;i++){
    music.push(musicians[i] + " plays " + instruments[i]); 
  }
  return music;
}

function johnLennonFacts(facts){
  var i =0;
  while(i < facts.length){
    facts[i] += '!!!';
    i++;
  }
  return facts;
}


function iLoveTheBeatles(fun){
  var love = [];
  do{
    love.push("I love the Beatles!");
    fun++;
   } while(fun<15);
return love;
  
}

