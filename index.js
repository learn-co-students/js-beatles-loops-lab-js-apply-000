// add solution here
function theBeatlesPlay(musicians, intsruments){
  var empty = [];
  for (var i = 0; i < musicians.length; i++){
    empty.push(musicians[i] + ' plays ' + intsruments[i]);
  }
  return empty;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var empty = [];
  var i = 0;
  do {
    empty.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return empty;
}
function iLoveTheBeatles(number){
 var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}
  