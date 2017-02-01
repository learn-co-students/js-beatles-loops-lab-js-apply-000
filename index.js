function theBeatlesPlay(musicians, instruments){
  var answer = [];
  for(var  i = 0; i<musicians.length; i++){
    answer.push(musicians[i] + " plays " + instruments[i]);
  }
  return answer;
}

function johnLennonFacts(facts){
  var answer = [];
  for(var  i = 0; i<facts.length; i++){
    answer.push(facts[i] + "!!!");
  }
  return answer;
}

function iLoveTheBeatles(num){
  var string = "I love the Beatles!";
  var answer = [];
  do{
    answer.push(string);
    num++;
  }
  while (num<15);
  return answer;
}
