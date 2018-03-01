

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(var k =0; k<4; k++){
    arr.push(musicians[k] + " plays " + instruments[k]);
  }
  return arr;
}



function johnLennonFacts(arr){
  var i = 0;
  var result = [];
  while (arr[i]){
    result.push(arr[i] + "!!!");
    i++
  }
  return result;
}



function iLoveTheBeatles( num ){
  var result = [];
  if (num>14){
    return ["I love the Beatles!"];
  }
  do{
    result.push("I love the Beatles!")
    num--;
  }
  while(num>=0);
  return result;
}

