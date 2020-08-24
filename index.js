// add solution here
function theBeatlesPlay(arr1,arr2){
  const array = []
  var i;
  for (i = 0; i < arr1.length; i++ ){
  array.push(arr1[i]+' plays ' +arr2[i]);
    }
  return array
}

function johnLennonFacts(arr){
  const array = []
  var i = 0;
  while (i<arr.length){
    array.push(arr[i] +'!!!');
    i = i + 1;
  }
  return array
}

function iLoveTheBeatles(num){
  const array = []
  do{
    array.push('I love the Beatles!');
    num =  num + 1;
  } while (num < 15);
  return array
}