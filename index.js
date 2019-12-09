function theBeatlesPlay(musicians, instruments){
  var resultArray = [];
  //var plays = " plays ";
  for(let i = 0; i < musicians.length; i++) {
    resultArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return resultArray;
}

function johnLennonFacts(facts) {
  var resultArray = [];
  let i = 0;
  while(i < facts.length){
    resultArray.push(facts[i] + "!!!");
    i++;
  }
  return resultArray;
}

function iLoveTheBeatles(num){
  var resultArray = [];
  do{
    resultArray.push('I love the Beatles!');
    num++;
  }while(num < 15);
  return resultArray;
}
