// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = []
  for (var i = 0; i < musicians.length; i++) {
    var temp = ""
    temp = musicians[i] + " plays " + instruments[i];
    result.push(temp);
  }
  return result;
}

function johnLennonFacts(facts) {
  var result = [];
  while (facts.length > 0) {
    var temp = "";
    temp = facts[0] + "!!!";
    result.push(temp);
    facts.shift();
  }

  return result;
}

function iLoveTheBeatles(num) {
  var result = [];
  var string = "I love the Beatles!";
  do {
    result.push(string);
    num++;
  } while(num < 15);
  
  return result;
}