function theBeatlesPlay(musArray, instArray){
  let newArray = [];

  for(let i = 0; i < musArray.length; i++){
    let arrayPush = `${musArray[i]} plays ${instArray[i]}`;
    newArray.push(arrayPush);
  }

  return newArray;
}

function johnLennonFacts(factsArray){
  let i = 0
  while(i < factsArray.length){
    factsArray[i] = `${factsArray[i]}!!!`
    i++;
  }

  return factsArray;
}

function iLoveTheBeatles(n){
  let newArray = [];

  do {
    newArray.push('I love the Beatles!');
    n++;
  } while(n < 15);

  return newArray;
}
