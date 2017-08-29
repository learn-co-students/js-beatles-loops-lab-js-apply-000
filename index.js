function theBeatlesPlay(musicians, instruments){
  var strArray = [];
  for(var i = 0; i < musicians.length; i++){
    strArray.push(musicians[i] + ' plays ' + instruments[i])
  };
  return strArray;
}

function johnLennonFacts(facts){
  var count = 0;
  var newArray = [];
  while( count < facts.length){
    newArray.push(facts[count] + '!!!');
    count++
  }
  return newArray;
}

function iLoveTheBeatles(number){
  var newArray = [];
  do{
    newArray.push('I love the Beatles!');
    number++;
  }while (number < 15)
  return newArray;
}
