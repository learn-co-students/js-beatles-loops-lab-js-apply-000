function theBeatlesPlay(memArray,instruArray) {
  let endArray = [];
  for (let i = 0; i < memArray.length; i++) {
    endArray.push(memArray[i]+" "+"plays"+" "+instruArray[i]);
  }
  return endArray;

}

function johnLennonFacts(factArray) {
  let counter = 0
  let values = []
  while(counter < factArray.length){
    values.push(factArray[counter]+"!!!")
    counter = counter + 1;
  }
  return values;
}

function iLoveTheBeatles(num) {
  let OutString = "I love the Beatles!";
  let values = [];
  let counter = 0;
  if(num > 15){
    return OutString;
  }else{
    do {
      values.push(OutString);
      counter = counter + 1;
    } while (counter < num+1);
  }
  return values;
}
