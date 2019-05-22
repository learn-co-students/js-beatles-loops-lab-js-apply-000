// add solution here
function theBeatlesPlay (arrMusician, arrInstrument) {
  var emptyArray = [];
  for (let i=0; i<arrMusician.length; i++) {
    emptyArray.push(`${arrMusician[i]} plays ${arrInstrument[i]}`);
  }
 return emptyArray;
}

function johnLennonFacts (arrFacts) {
  var i=0;
  while (i<arrFacts.length) {
    arrFacts[i] = arrFacts[i] + "!!!";
    i++;
  }
  return arrFacts;
}

function iLoveTheBeatles (num) {
  var outputArray = [];
  do {
    outputArray.push("I love the Beatles!");
    num++
  } 
  while (num<15);
  
  return outputArray;
}

