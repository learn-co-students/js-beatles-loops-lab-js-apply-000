// add solution here
function theBeatlesPlay(musArr, instArr) {
  var ansArray = [];
  
  for (var i = 0; i < musArr.length; i++) {
    var musEle = musArr[i];
    var instEle = instArr[i];
    var musInstStr = musEle + ' plays ' + instEle;
    
    ansArray.push(musInstStr);
  }
  return ansArray;
}


function johnLennonFacts(lennonFacts) {
  var shoutArray = [];
  var i = 0;
  
  while (i < lennonFacts.length) {
    shoutArray.push(lennonFacts[i] + '!!!')  
    
    i++;
  }
  
  return shoutArray;
}


function iLoveTheBeatles(n) {
  var ansArray = [];
  
  do {
    ansArray.push('I love the Beatles!');
    n++;
  }
  while (n < 15) 
  
  return ansArray;
}