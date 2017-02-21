function theBeatlesPlay (musicians, instruments){
  var arr = [];
  for (var i=0; i<musicians.length; i++){
        arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr;
}

function johnLennonFacts(arr){
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
    newArr.push(arr[i] + "!!!");
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  var beatlesArr = [];
  do {
    beatlesArr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return beatlesArr;
}
