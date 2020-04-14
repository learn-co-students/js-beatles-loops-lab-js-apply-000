// add solution here

function theBeatlesPlay(array1, array2){
  let results = [];
  
  for(let i = 0; i < array1.length; i++){
    results.push(`${array1[i]} plays ${array2[i]}`)
  }
  return results;
}

function johnLennonFacts(array){
  let results = [];
  for(let i = 0; i < array.length; i++){
    results.push(array[i] + '!!!')
  }
  return results;
}

function iLoveTheBeatles(number){
  let results = [];
  if(number > 15){
    return ["I love the Beatles!"]
  } else {
    let i = 0;
    while(i <= number){
      results.push("I love the Beatles!")
      i++;
    }
  }
  return results;
}