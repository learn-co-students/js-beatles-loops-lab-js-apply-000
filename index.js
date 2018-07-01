function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array;
}
function johnLennonFacts(facts){
  var sentence = [];
  var i = 0;
  while (i < facts.length){
    sentence.push(`${facts[i]}!!!`)
    i++;
}
return sentence;
}
function iLoveTheBeatles(n){
  var empty = [];
  var i = 0;
  do {
    empty.push(`I love the Beatles!`)
    n++;
  }
  while (n < 15);
  return empty; 

}
