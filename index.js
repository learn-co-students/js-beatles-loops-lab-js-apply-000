function theBeatlesPlay(musicians, instruments){
  var theyPlay = [];
  for (var i = 0; i < musicians.length; i++){
    theyPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theyPlay;
};

function johnLennonFacts(facts){
  var yellFacts = [];
  var i = 0;
  while (i < facts.length){
    yellFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return yellFacts;
};

function iLoveTheBeatles(number){
  var manyLoves = [];
  do {
    manyLoves.push("I love the Beatles!")
    number++
  }
  while(number < 15);
  return manyLoves;
};
