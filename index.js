function theBeatlesPlay(musicians,instruments){
  var sentence = [];
  for (var i = 0; i < musicians.length; i++){
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return sentence;
}
function johnLennonFacts(facts){
  var strings = [];
  var i = 0
  while (i < facts.length){
    strings.push(`${facts[i]}!!!`)
    i++;
  }
  return strings;
}
function iLoveTheBeatles(n){
  var array = [];
  do {
   array.push("I love the Beatles!")
   n++;
 }
   while (n < 15);
return array;
}
