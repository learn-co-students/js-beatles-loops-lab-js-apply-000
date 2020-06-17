// add solution here
function theBeatlesPlay(array1, array2){
  let newArray = [];
  for ( let i = 0; i < array1.length; i++){
    newArray.push(array1[i] + " plays " + array2[i]);
  }
  return newArray;
}

function johnLennonFacts(facts){
  let newArray = [];
  let i = 0;
  while (i < facts.length){
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num){
  let emptyArray = [];
  do{ emptyArray.push("I love the Beatles!");
  num++;
}
while (num < 15);
return emptyArray;
}