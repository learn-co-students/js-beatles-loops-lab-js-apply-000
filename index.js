function theBeatlesPlay(musicians, instruments) {
      var result = [];
      for ( var i = 0; i<musicians.length; i++) {
        for (var k = 0; k< instruments.length; k++) {
          if(i===k) {
              result.push(musicians[i] + " plays " + instruments[k]);
          }
        }
      }
      return result;
    }
  function johnLennonFacts (facts) {
    var i = 0;
    while (i < facts.length) {
      facts[i] = facts[i]+"!!!";
      i++
    }
    return facts;
  }

  function iLoveTheBeatles(num) {
    var result = [];
    var i = 0;
    do { result.push('I love the Beatles!');
    i++;
  } while (i < (15-num));
   return result;
 }
  
