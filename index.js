// add solution here

function theBeatlesPlay(musicians, instruments){
  var array1 = [];
  for (var i = 0; i < musicians.length; i++){
    array1.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array1;
}

function johnLennonFacts(facts){
  var array2 = [];
  for (var i = 0; i < facts.length; i++){
    array2.push(`${facts[i]}!!!`);
  }
  return array2;
}

function iLoveTheBeatles(number){
  var i = number;
  var array3 = [];
  do {
    array3.push('I love the Beatles!'); i++; 
  }
    while (i>7 && i<15);
  return array3;
}