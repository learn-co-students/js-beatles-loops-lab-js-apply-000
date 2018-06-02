function theBeatlesPlay(musicians, instruments){
  var emptyarray = [];
  for (i=0; i < musicians.length; i++){
    emptyarray.push(musicians[i] +  " plays "  + instruments[i]);
  }
      return emptyarray;
}

function johnLennonFacts(arr){
  var i = 0;
  var new_arr = [];
  while (arr[i]){
    new_arr.push(arr[i] + "!!!");
    i++;
  }
  return new_arr;
}

function iLoveTheBeatles(n){
  var emptyarray = [];
  do {
    emptyarray.push("I love the Beatles!"); 
    n++;  
}
while (n < 15);
return emptyarray;
}