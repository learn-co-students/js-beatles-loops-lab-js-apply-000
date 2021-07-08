// add solution here

function theBeatlesPlay(musicians, instruments){
  var bill = [];
  for (var i = 0; i < musicians.length; i++) {
    bill[i] = musicians[i] + " plays " + instruments[i];
  }

  return bill
}

function johnLennonFacts(facts){
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(num){
  let i = num;
  var love = [];
  do {
    love.push("I love the Beatles!");
    i++;
  } while (i < 15);

  return love
}
