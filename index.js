// add solution here
function theBeatlesPlay(arrM, arrI) {
  var result = [];
  for (var i = 0; i < arrM.length; i++) {
    result.push(arrM[i] + ' plays ' + arrI[i])
  }
  return result;
}

function johnLennonFacts(arrF) {
  return arrF.map(function(fact) {
    return fact + '!!!';
  })
}

function iLoveTheBeatles(num) {
  var result = [];
  do {
    result.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return result;
} 