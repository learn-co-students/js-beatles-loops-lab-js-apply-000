function theBeatlesPlay(musicians, instruments) {
  var theirInstrument = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i]; 
    var instrument = instruments[i]; 
    var sent = musician + ' plays ' + instrument;
    theirInstrument.push(sent);
  }
  
  return theirInstrument;
}


function johnLennonFacts(facts) {
  var lennonFacts = [];
  
  var i = 0;
  while (i < facts.length) {
    var fact = facts[i];
    lennonFacts.push(fact + '!!!');
    i++;
  }
  
  return lennonFacts;
}


function iLoveTheBeatles(number) {
  var love = []; 
  
  do {
    love.push('I love the Beatles!')
    number++
    
  } while (number < 15)
 
 return love;   
}