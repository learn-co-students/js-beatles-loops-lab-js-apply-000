function theBeatlesPlay(musicians, instruments) {
  var playsArr = [];
  
  for(var i = 0; i < musicians.length; i++) { 
      playsArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playsArr;
}

function johnLennonFacts(factsArr) {
  var i = 0;
  
  while(i < factsArr.length) {
    factsArr[i] += "!!!";
    i++;
  }
  return factsArr;
}

function iLoveTheBeatles(n) {
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArr;
}