function theBeatlesPlay (arrM, arrI){
  var empty = new Array();
  var mugician, instrument,result;
  for (var i = 0; i < arrM.length; i++)
  {
    mugician = arrM[i];
    instrument = arrI[i];
    result = `${mugician} plays ${instrument}`;
    empty.push(result);
  }
  return empty;
}

function johnLennonFacts(facts){
  var counter = 0;
  while(counter < facts.length)
  {
    facts[counter] = facts[counter] + "!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  }while(num < 15)
  return arr;
}