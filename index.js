function theBeatlesPlay(musicians, instruments){
  var stored = [];
  for(var i = 0; i < musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i]
    stored.push(string);
  }
  return stored;
}

function johnLennonFacts(facts){
  var output = [];
  var i = 0;
  while(i < facts.length){
    output.push(facts[i] + "!!!");
    i++;
  }
  return output;
}

function iLoveTheBeatles(num){
  var sentence = "I love the Beatles!";
  if(num >= 15) return sentence;
  var output = [];
  var i = 0;
  do{
    output.push(sentence);
    ++i;
  }while(i <= num);
  return output;
}
