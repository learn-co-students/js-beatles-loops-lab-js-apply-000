function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
for (var m = 0; m<musicians.length; m++) {
  allMusicians.push(musicians[m] + " plays " + instruments[m]);
    }
  return allMusicians;
}


function johnLennonFacts(facts) {
  var excitingFacts = [];
  let f = 0;
  while (f<facts.length) {
    excitingFacts.push(`${facts[f]}!!!`);
    f++;
  }
  return excitingFacts;
}


function iLoveTheBeatles(number) {
  var eArray = [];
  do {
    eArray.push("I love the Beatles!");
    number++;
    } while (number<15); 
    return eArray;
    }
