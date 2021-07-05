// add solution here

function theBeatlesPlay(musicians,instruments) {
  var arr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var name = musicians[i];
    var instr = instruments[i];
    var pair = name + ' plays ' + instr;
    arr.push(pair);
  }
  
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  
  var i = 0;
  
  while (i < facts.length) {
    var fact = facts[i];
    var newFact = fact + '!!!';
    arr.push(newFact);
    i++;
  }

  
  return arr;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    num++;
  }
  while (num < 15)
  
  return array;
}