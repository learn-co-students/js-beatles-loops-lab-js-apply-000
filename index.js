function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}

function johnLennonFacts(arr) {
  var i = 0
  while(i < arr.length){
    arr[i] = arr[i] + "!!!"
    i++
  }
  return arr;
}
 
 function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++
  }
  while(num < 15)
   return arr;
}


 
 
