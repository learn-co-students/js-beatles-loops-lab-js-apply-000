// add solution here
function theBeatlesPlay(array1,array2){
 const combinedArray = [];
for (let i =0;i<array1.length;i++){
  combinedArray.push(array1[i] + " plays " + array2[i]);

}return combinedArray;
}

function johnLennonFacts(array){
  const upArray = [];
  let i=0;
  while(i<array.length){
    upArray.push(array[i]+"!!!");
    i++;
  }return upArray;
}

function iLoveTheBeatles(n){
  const newArr = [];
  let i=0;
  do{n++;newArr.push("I love the Beatles!");}
  while(n<15);
  return newArr;
}