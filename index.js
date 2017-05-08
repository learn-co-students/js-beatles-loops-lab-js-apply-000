function theBeatlesPlay(musicians,instruments){
  var sentences = [];
  for (var i=0; i<musicians.length; i++){
    var sent = musicians[i] + " plays " + instruments[i];
    sentences.push(sent)
  }
  return sentences;
}

function johnLennonFacts(facts){
  var index =0;
  while (index<facts.length){
    facts[index] = facts[index] + "!!!"
    index++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!")
    num++;
  }while (num<15)
  return arr;
}
