function theBeatlesPlay(musicians, instruments) {
  var theyPlays = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var hePlays = musician + ' plays ' + instrument;
    theyPlays.push(hePlays);
  }

  return theyPlays;
}


function johnLennonFacts(facts) {
  var exclam = [];
  
  var i = 0;
  
  while (i < facts.length) {
    var fact = facts[i];
    exclam.push(fact + '!!!');
    
    i++;
  }
  
  return exclam;
}


function iLoveTheBeatles(num) {
  var arr = [];
   
  do {
    arr.push(`I love the Beatles!`);
    num++;
  }
  while(num < 15) 
    return arr;
}
