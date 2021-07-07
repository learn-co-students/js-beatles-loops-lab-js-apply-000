// add solution here
function theBeatlesPlay(arr1, arr2){
  let finalArr = [];
  for(let i=0;i<arr1.length;i++){
    finalArr.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return finalArr;
}

function johnLennonFacts(arr){
  let withExcitement = [];
  for (let i=0; i<arr.length;i++){
    withExcitement.push(`${arr[i]}!!!`)
  }
  return withExcitement;
}

function iLoveTheBeatles(n){
  let arr = [];
  do{
    arr.push('I love the Beatles!');
    n++
  }while(n<15)
  return arr;
}