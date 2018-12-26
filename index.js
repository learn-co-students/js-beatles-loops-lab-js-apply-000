// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  var i;
  for(i = 0; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`
    arr.push(string)
  }
  return arr
}


function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while(i < facts.length) {
    arr.push(`${facts[i]}!!!`);
    i++;
    }
    return arr
  }
  
  
  function iLoveTheBeatles(number) {
    var arr = [];
    do {
      arr.push('I love the Beatles!');
      number++;
    }
    while (number < 15);
    return arr
  }
  