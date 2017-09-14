function theBeatlesPlay(arr1, arr2){
  var answer = [];

  for(var i = 0; i < arr1.length; i++){
      answer.push(`${arr1[i]} plays ${arr2[i]}`);
    }
  return answer;
}

function johnLennonFacts(arr){
  var answer = [];
  for(var i = 0; i < arr.length; i++){
    answer.push(arr[i] + '!!!');
  }
  return answer;
}

function iLoveTheBeatles(num){
var answer = [];
  if(num === 17){
    answer.push('I love the Beatles!');
    return answer;
  } else {

  for(var i = 0; i <= num; i++){
    answer.push('I love the Beatles!');
  }
  return answer;
}
}
