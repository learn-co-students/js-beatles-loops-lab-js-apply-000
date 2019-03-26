// add solution here
function theBeatlesPlay(musiciansArr, instrumentsArr){
  var resultArr = [];
  for (var i = 0; i<musiciansArr.length; i++){
      var string = `${musiciansArr[i]} plays ${instrumentsArr[i]}`;
      resultArr.push(string);
  }
  return resultArr;
}

function johnLennonFacts(factsArr){
  var i = 0;
  while (i<factsArr.length){
    factsArr[i] = factsArr[i]+'!!!';
    i++;
  }return factsArr;
}

function iLoveTheBeatles(num){
  var resultArr = [];
  var i = num;
  do{
    resultArr.push("I love the Beatles!");
    i++;
  }while (i<15);
  return resultArr;
}
