var theBeatlesPlay = function(musicians, instruments) {
  var answersHere = [];
  var i;
for (i = 0; i < musicians.length; i++) {
  var string =  musicians[i] + " plays " + instruments[i];
  answersHere.push(string);
  }
  return answersHere
}


var johnLennonFacts = function(facts){
  var n = 0;
  while (n < facts.length){
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts
}

var iLoveTheBeatles = function(n){
  var declareLove = [];
  do { var statement = "I love the Beatles!";
  declareLove.push(statement);
  n++;
     }
  while (n < 15);
  return declareLove
}