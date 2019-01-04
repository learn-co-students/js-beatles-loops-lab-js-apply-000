function theBeatlesPlay(musicians, instruments) {
  var instrumentsPlayByMusicians = [];
  
  for(var i = 0; i < musicians.length; i++) {
    instrumentsPlayByMusicians.push(`${musicians[i]} plays ${instruments[i]}`);     
  }
  return instrumentsPlayByMusicians;
}

function johnLennonFacts(facts) {
  var strings = [],
      counter = 0;
      
  while ( counter < facts.length ) {
    strings.push(`${facts[counter]}!!!`);
    counter++;
  }
  
  return strings;
}


function iLoveTheBeatles(number) {
  var array = [];
  
  do {
    array.push(`I love the Beatles!`);
    number++;
  } while (number < 15);
  
  return array;
}