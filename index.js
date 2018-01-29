function theBeatlesPlay (musicians, instruments){
  var theBeatles = [];
  var count = 0;
  for (count = 0; count < musicians.length; count++){
    var Beatle = musicians[count] + " plays " + instruments[count];
    theBeatles.push(Beatle);
  }
  return theBeatles;
}

function johnLennonFacts (facts){
  var count = 0;
  while (count < facts.length){
    facts[count] += "!!!";
    count++;
  }
  return facts;

}

function iLoveTheBeatles (howMuch){
  var answer = [];
  do {
    answer.push("I love the Beatles!");
    howMuch++;
  }
  while (howMuch < 15);

  return answer;

}
