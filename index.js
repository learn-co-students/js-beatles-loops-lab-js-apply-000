// add solution here
function theBeatlesPlay(musicians,instruments){
  let firstArray = [], str='';
  for (let i = 0; i < musicians.length; i++) {
    str = musicians[i] + " plays " + instruments[i];
    firstArray.push(str);
  }
  return firstArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var factList = [];
  var str = '';
  while (facts[i]) {
    str = facts[i] + "!!!";
    factList.push(str);
    i++;
  }
  return factList;
}

function iLoveTheBeatles(n){
  var resultList = [];
  do {
    resultList.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return resultList;
}