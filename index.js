function theBeatlesPlay (musician, instrument){
  var beatlesStatement = [];

  for (var i = 0; i < musician.length; i++){
    beatlesStatement.push( musician[i] + " plays " + instrument[i]);
  }
  return beatlesStatement;
}

function johnLennonFacts (facts) {
  for (var i = 0; i < facts.length ; i++){
    facts[i] = facts[i] + "!!!";
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var beatleLove = [];
  var i = 0;

  do {
    beatleLove.push("I love the Beatles!");
    i++;
  } while( i <= num && num <= 15 );

  return beatleLove;
}
