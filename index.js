// add solution here


   
function theBeatlesPlay(musicians, instruments) {
  var musicianInstruments = [];
    for(var i = 0; i < musicians.length; i++) {
      musicianInstruments[i] = musicians[i] + " plays " + instruments[i];
    }
    return musicianInstruments;
  }   
    




function johnLennonFacts(facts) {
  var i = 0;
  while (facts[i]) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}


function iLoveTheBeatles(inputNumber) {
  var beat = [];
  var i = 0;
  do{ 
    beat[i] = "I love the Beatles!";
    i++;
  } while(i< 15-inputNumber);
  return beat;
}