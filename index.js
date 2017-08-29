function theBeatlesPlay(array1, array2){

var array3 = [];
  for (var i = 0; i <= array1.length - 1;i++){
    array3.push(array1[i] + " plays "+ array2[i])
  }
  return array3
}

function johnLennonFacts(array) {
  var i = 0;
  while (i <= array.length - 1){
    array[i] += "!!!"
    i++
  }
  return array
}


function iLoveTheBeatles(num) {
  var array = [];
  if( num < 15){
    for (var i = 0; i <= num; i++){
      array.push("I love the Beatles!")
    }
  } else {
    array.push("I love the Beatles!")
   }  
  return array;
}
