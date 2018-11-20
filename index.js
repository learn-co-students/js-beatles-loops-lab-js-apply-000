var instruments = [];
var musicians = [];

function theBeatlesPlay(musicians, instruments) {
  var array= [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var shout = [];
  var i = 0;
  while ( i <facts.length) {
    shout.push(`${facts[i]}!!!`);
    i++
  }
  return shout;
}

function iLoveTheBeatles(number) {
  var array = [];
  
}