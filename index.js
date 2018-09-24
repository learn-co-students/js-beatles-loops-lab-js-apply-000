// add solution here
function theBeatlesPlay(arr1,arr2){
  const sentanceArr = [];
  for(let i = 0 ; i < arr1.length ; i++){
    sentanceArr.push(`${arr1[i]} plays ${arr2[i]}`);
  }
  return sentanceArr;
}

function johnLennonFacts(arr){
  const exclamationArr = [];
  let i = 0;
  while(i < arr.length){
    exclamationArr.push(`${arr[i]}!!!`);
    i++;
  }
  return exclamationArr;
}

function iLoveTheBeatles(num){
  const arr = [];
 let i = num;
  do{
    arr.push("I love the Beatles!");
    i++;
  }
  while(i < 15);
  return arr;
}



