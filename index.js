function theBeatlesPlay(arr1, arr2){
  var arr3 = [];
  for(var i = 0; i < arr1.length; i++){
    arr3.push(arr1[i] + ' plays ' + arr2[i]);
  } return arr3;
}

function johnLennonFacts(arr){
  var i = arr.length -1;
  while(i >= 0){
    arr[i] += '!!!';
    i--;
  } return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}
