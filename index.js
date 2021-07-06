// add solution here


function theBeatlesPlay(musicians, instruments){
  
  var memberInstrument = [];
  var musicianInstrument=[];
  for (var i=0; i < musicians.length; i ++){
  memberInstrument = musicians[i] + ' plays ' + instruments[i];
  musicianInstrument[i] = memberInstrument;
    
  }
  return musicianInstrument;
}

function johnLennonFacts(facts){
  var facts_updated = [];
  var counter = 0;
  while (facts.length > counter){
    facts_updated.push(`${facts[counter]}` + '!!!');
  counter ++;
  }
  return facts_updated;
}

function iLoveTheBeatles(number){
  var empty_array = []
  do
  {
    number ++;
    empty_array.push("I love the Beatles!")
  } 
  while (number < 15);
  
  return empty_array;
  
}