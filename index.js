function theBeatlesPlay(musicians, instruments) {
  var answer  = [];
  for (var i = 0; i < musicians.length; i++) {
    answer.push(musicians[i] + " plays " + instruments[i]);
  };
  return answer;
};

function johnLennonFacts(facts) {
  var answer = [];
  var i = 0;
  while (i < facts.length) {
    answer.push(facts[i] + "!!!");
    i++;
  };
  return answer;
};

function iLoveTheBeatles(number) {
  var answer = [];
  do {
    answer.push("I love the Beatles!")
  }
  while ((answer.length <= number) && (number < 15));
  return answer;
};
