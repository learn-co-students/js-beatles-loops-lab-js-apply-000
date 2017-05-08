function theBeatlesPlay(musicians,instruments){
 var theyPlay = [];
 for (var i = 0; i < musicians.length; i++){
   var string = musicians[i]+' plays '+instruments[i];
   theyPlay.push(string);
 }
    return theyPlay}

    function johnLennonFacts(facts){
      var theFacts = [];
      var i = 0;
      while( i < facts.length){
      theFacts.push(facts[i]+"!!!");
      i++;
      }
    return theFacts;
   }

  function iLoveTheBeatles(number){
    var theLove = [];
    var i = number
    do {
      theLove.push("I love the Beatles!");
      i++;
  } while (i<15);
  return theLove
  }
