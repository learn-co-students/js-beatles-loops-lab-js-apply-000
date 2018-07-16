// add solution here
function theBeatlesPlay(musicians, instruments){
  var theArray = [];
  for (var i = 0; i < musicians.length; i++){
    theArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return theArray;
  }
  
  function johnLennonFacts(facts){
    var i = 0;
    var loudFacts = [];
    while (i < facts.length){
      loudFacts.push(`${facts[i]}!!!`);
      i++;
    }
    return loudFacts;
  }
  
  function iLoveTheBeatles(n){
      var theArray = [];
  
    do {
      theArray.push("I love the Beatles!");
      n = n + 1;
    } 
    while (n < 15);
    return theArray;
  }