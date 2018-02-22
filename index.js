function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var newArr = [];
  for (var i=0; i<musiciansArr.length; i++){
    newArr.push(musiciansArr[i] + " plays " + instrumentsArr[i]);
  }
  return newArr;
}

function johnLennonFacts(factArr){
  var i = 0;
  while (i < factArr.length){
    factArr[i] += "!!!";
    i++;
  }
  return factArr;
}

function iLoveTheBeatles(number){
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    number++;
  } 
  while (number < 15);
  return newArr;
}