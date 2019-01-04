function theBeatlesPlay(arrM, arrI) {
  var finalArr = [];
  
  for (var i = 0; i < arrM.length; i++) {
    var currentM = arrM[i];
    var currentI = arrI[i];
    
    finalArr.push(currentM + ' plays ' + currentI);
  }
  
  return finalArr;
}

function johnLennonFacts(arrF) {
  var factsArr = [];
  
  var j = 0;
  
  while (j < arrF.length) {
    factsArr.push(arrF[j] + '!!!');
    
    j++;
  }
  
  return factsArr;
}

function iLoveTheBeatles(num) {
  var muchLove = [];
  
  do {
    muchLove.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  
  return muchLove;
}