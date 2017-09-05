var sentence;
function theBeatlesPlay(musicians,instruments){
  for (var i = 0; i < musicians.length; i++) sentence.push('${musicians[i]} plays ${instruments[i]}');
  return sentence;
};
function johnLennonFacts (facts){
  var i = 0;
  while (i < facts.length)  {
    facts[i]+= '!!!';
    i++;
  }
};
function iLoveTheBeatles(number){
  var times;
  var i = 0;
  do{
    times.push('I love the Beatles!');
  }while (i < number && number < 15);
};
