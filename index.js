// add solution here
var theBeatlesPlay = function(musicians,instruments) {
    var strings = [];
    for(var i = 0; i < musicians.length ; i++) {
      strings.push(musicians[i] + " plays " + instruments[i])
    }
    return strings;
};

var johnLennonFacts = function(facts) {
  for(var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!";
  }
  return facts;
};

var iLoveTheBeatles = function(n) {
  var love = [];
  do {
    love.push("I love the Beatles!")
    n++;
  } while (n < 15);
  return love;

};
