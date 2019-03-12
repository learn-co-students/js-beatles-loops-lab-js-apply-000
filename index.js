// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr=[];
  var i = 0;
  for (i=0;i<musicians.length;i++) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(factArray) {
  var arr=[];
  var i = 0;
  while (i<factArray.length){
    arr.push(factArray[i] + "!!!");
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    n++;
    arr.push("I love the Beatles!");
  } while (n<15);
return arr;
}