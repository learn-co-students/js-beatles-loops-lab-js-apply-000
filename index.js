// add solution here
function theBeatlesPlay(array1, array2){
  let whatIsPlayed = [];
  for (let i = 0; i < array1.length; i++){
  whatIsPlayed.push(`${array1[i]} plays ${array2[i]}`);
  }
  return whatIsPlayed;
}

function johnLennonFacts(array){
  let final = [];
  let i = 0;
  while (i < array.length){
    final.push(array[i] + `!!!`);
    i++;
  }
  return(final);
}  

function iLoveTheBeatles(num){
  let result = [];
  do {
    result.push("I love the Beatles!")
    num++;
  }
  while (num < 15);
  return result
} 