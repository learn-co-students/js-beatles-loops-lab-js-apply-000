
function theBeatlesPlay (musicians, instruments) {
  var beatlesArray = [ ];
  var counter = 0;
  var beatlesString = '';

  for (counter = 0; counter < musicians.length; counter++){
    beatlesString = musicians[counter] + " plays " + instruments[counter]
    beatlesArray.push(beatlesString)
  };
  return beatlesArray;
}
function johnLennonFacts (facts){
  var excitedFacts = [];
  var factConstructor = '';
  var counter = 0;
  while (counter < facts.length){
    factConstructor = facts[counter] + "!!!";
    excitedFacts.push(factConstructor);
    counter++;
  }
  return excitedFacts;
}

function iLoveTheBeatles (number){
  var loveArray= [];
  var counter = 0;
  if (number < 15){
    do {
      loveArray.push('I love the Beatles!');
      counter++;
    }
    while (counter <= number);
  }
  else {
    loveArray.push('I love the Beatles!');
  }
  return loveArray;
}
