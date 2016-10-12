function theBeatlesPlay(musicians, instruments){
  var resultArr = []
  var len = Math.floor(instruments.length, musicians.length)
  for (var i = 0; i < len; i++){
    resultArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return resultArr;
}

function johnLennonFacts(facts){
  var resultArr = [];
  var i = 0;
  var len = facts.length;
  while (i < len){
    resultArr.push(facts[i] + '!!!');
    i++;
  }
  return resultArr;
}

function iLoveTheBeatles(num){
  var resultArr = [];
  var i = 0;
  do {
    resultArr.push('I love the Beatles!');
    i++;
  }
  while (i <= num && num <= 15);

  return resultArr;
}
