// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    var solution = musician + ' plays '+ instrument;
    arr.push(solution);
  }
  return arr;
}
function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while (i < facts.length){
    var fact = facts[i] + '!!!';
    arr.push(fact);
    i++;
  }
  return arr;
}
function iLoveTheBeatles(n) {
 var arr = [];
  do {
    arr.push('I love the Beatles!');
    n++;
  }
  while (n < 15){
  }
  
 return arr;
}