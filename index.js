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
  var output = [];
  do{
    output.push(sentence);
    ++num;
  }while(num < 15);
  return output;
}
