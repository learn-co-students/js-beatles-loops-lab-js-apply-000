// add solution here
function theBeatlesPlay(musicians, instruments) {
  let whoPlaysWhat = [];
  for (let i=0; i<musicians.length; i++) {
    whoPlaysWhat[i] = musicians[i] + " plays " + instruments[i];
  }
  return whoPlaysWhat;
}

function johnLennonFacts(factArr) {
  let counter=0;
  while (counter < factArr.length) {
    factArr[counter] = factArr[counter] + "!!!";
    counter++;
  }
  return factArr;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while (num<15);
  return arr;
}