// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  let result = [];
  
  for (let i = 0; i < musicianArray.length; i++) {
    result.push(musicianArray[i] + ' plays ' + instrumentArray[i]);
  }
  return result;
}

function johnLennonFacts (facts) {
  let result = [];
  let i = 0;
  
  while (i < facts.length) {
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}

function iLoveTheBeatles(num) {
  let result = [];
  let i = 0;
  
  do {
    result.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return result;
}







