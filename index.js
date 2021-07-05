// add solution here

function theBeatlesPlay (musiciansArr, instrumentsArr) {
  
  let stringsArr = [];
  
  for (let i = 0; i < musiciansArr.length; i++) {
    stringsArr.push(musiciansArr[i] + " plays " + instrumentsArr[i]);
  }
 
  return stringsArr; 
}

function johnLennonFacts(factsArr) {
  
  let factsExclArr = [];
  
  let i = 0;
  while (i < factsArr.length) {
    factsExclArr.push(factsArr[i] + "!!!");
    i++;
  }
  
  return factsExclArr;
}

function iLoveTheBeatles(num) {
  let beatlesArr = []; 
  
  do {
    beatlesArr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  
  return beatlesArr;
}