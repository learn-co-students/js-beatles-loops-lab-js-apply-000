// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr = []
  let tempString = ""
  for (var i=0; i< musicians.length; i++) {
    tempString = musicians[i] + " plays " + instruments[i];
    newArr.push(tempString)
    tempString = ""
  }
  return newArr
}

function johnLennonFacts(facts) {
  var newArr = [];
  let i = 0;
  const exlam = "!!!";
  while (facts[i]) {
    newArr.push(facts[i]+exlam)
    i++;
  }
  return newArr
}

function iLoveTheBeatles(num) {
  var newArr = [];
  var i=0;
  var loveStr = "I love the Beatles!"
  do {
    newArr.push(loveStr)
    num++
    i++;
  } 
  while (num<15)
  return newArr
}