// add solution here


function theBeatlesPlay(musicians,instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array;
}


function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i] += '!!!';
    i++;
  }
  return facts;
}


function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return love;
}