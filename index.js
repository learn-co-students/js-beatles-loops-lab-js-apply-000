
function theBeatlesPlay(arrM,arrI){
  var myArray = [];
  for(var i = 0;i<arrM.length;i++){
    myArray.push(arrM[i] + " plays " + arrI[i])
  }
  return myArray;
}

function johnLennonFacts(arrF){
  var myArray = [];
  var i = 0;
  while(i<arrF.length){
    myArray.push(arrF[i]+"!!!")
    i++;
  }
  return myArray;
}

function iLoveTheBeatles(num){
  var myArray = [];
  var i = num;
  do {
    myArray.push("I love the Beatles!");
    i++
  }while (i <15)
  return myArray;
}
