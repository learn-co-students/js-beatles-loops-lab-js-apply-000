function theBeatlesPlay(arrayM,arrayI){
  var array = [];
  for (var i in arrayM){
    array.push(arrayM[i] + ' plays ' + arrayI[i])
  }
  return array;
}

function johnLennonFacts(facts){
  var excitedFacts = [];
  var i=0;
  while (i < facts.length){
    excitedFacts.push(facts[i] + '!!!')
    i++
  }
  return excitedFacts;
}

function iLoveTheBeatles(num){
  var array = [];
  do{
    array.push('I love the Beatles!')
    num ++;
  } while (num<15)


  return array;
}
