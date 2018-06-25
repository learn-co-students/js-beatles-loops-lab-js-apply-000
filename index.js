function theBeatlesPlay(musiciansArr, instrumentsArr){
  var arrayName = [];
  
  for (var i = 0; i < musiciansArr.length; i++){
    arrayName.push(musiciansArr[i] + " plays " + instrumentsArr[i]);
  }
  return arrayName;
}

function johnLennonFacts (factsArr) {
  var results = [];
  var i = 0;
  
  while (i < factsArr.length) {
    results.push(factsArr[i] + "!!!");
    i++;
  }
  return results;
}


function iLoveTheBeatles (num) {
  var arrayName = [];
  
  do {
    arrayName.push("I love the Beatles!")
    num = num + 1;
  } while (num < 15);
  return arrayName;
}