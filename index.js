function theBeatlesPlay(array1, array2){
  var instrumentArr = [];
  for(var i=0; i < array1.length; i++){
    instrumentArr.push(array1[i] +" plays " + array2[i])
  }
  return instrumentArr;
}

function johnLennonFacts(factsArray){
  var i=0;
  while (i < factsArray.length){
    factsArray[i] += "!!!";
    i++;
  }

  return factsArray;
}

function iLoveTheBeatles(num){
  var i=0;
  var finalArr = [];
  if (num > 15){
    return 'I love the Beatles!';
  }
  do {
    finalArr.push("I love the Beatles!");
    i++;
  } while (i<=num);
  return finalArr;
}
