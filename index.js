function theBeatlesPlay(musicians, instruments){
  var emptyArr = [];
  for (var i = 0; i < musicians.length; i++){
    var muses = musicians[i];
    var instru = instruments[i];
    emptyArr.push(muses + " plays " + instru);
  }
  return emptyArr;
}

function johnLennonFacts(facts){
  var i = 0;
  var emptArr = [];
  while(i < facts.length){
    emptArr.push(facts[i] + "!!!");
    i++;
  }
  return emptArr;
}

function iLoveTheBeatles(numb){
  var emptArr=[];
  do{
    emptArr.push("I love the Beatles!")
    numb++;
  }
  while (numb < 15);
  return emptArr;
}