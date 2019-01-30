
function theBeatlesPlay (musicians, instruments) {
var artists = [];

for (var counter = 0; counter < musicians.length; counter++) {
  var artistSkill = musicians[counter] + ' plays ' + instruments[counter];
  artists[counter] = artistSkill;
}
 return artists;
}


function johnLennonFacts(facts) {
  var factCounter = 0;
  
  while(factCounter < facts.length) {
    facts[factCounter] += '!!!';
    factCounter++;
  }
  return facts;
}

function iLoveTheBeatles (inputNumber) {
  var ilb = [];
  
  if (inputNumber < 15) {
    var counter = 0;
    
    do {
      ilb[counter] = 'I love the Beatles!';
      counter++;
    } while (counter < inputNumber + 1);
    
    return ilb;
  }
  else
  {
    return 'I love the Beatles!';
  }

}

