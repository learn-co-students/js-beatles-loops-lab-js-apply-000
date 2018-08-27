// add solution here

function theBeatlesPlay(arr1, arr2){
  var empty = [];
  for(var i = 0; i<arr1.length; i++){
    empty.push(arr1[i]+" "+"plays"+" "+arr2[i]);
  }
  return empty;
}


function johnLennonFacts(arr1) {
  var empty =[];
  var i = 0;
  while (i <arr1.length){
    empty.push(arr1[i]+"!!!");
    i++
  }
  return empty;
}

function iLoveTheBeatles(number){
  var empty = [];
  var i = 0;
  do {
    empty.push("I love the Beatles!");
    i++;
  } while(i< number +1 && number < 15)
  return empty;
}