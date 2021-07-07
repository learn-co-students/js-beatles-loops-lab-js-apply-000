
function theBeatlesPlay(musicians, instruments){
    var playsArray = [];
    for (var i = 0; i< musicians.length; i++){
       playsArray[i] =  musicians[i] + " plays " + instruments[i];
     
    }
    return playsArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var factsArray = [];
  while (i < facts.length){
    factsArray[i] = facts[i] + "!!!";
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number){
  		var loveBeatles = [];
  		var text = "I love the Beatles!";
 		 var i = 0;
 		do {
   			 loveBeatles[i] = "I love the Beatles!";
   			 i++;
 		}
 while (i < 15 - number);
 			return loveBeatles;
}



