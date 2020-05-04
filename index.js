// add solution here

function theBeatlesPlay(arr1, arr2){
  let output = [];
  
  for(let i=0; i < arr1.length; i++){
    let temp = arr1[i] + " plays " + arr2[i];
    output.push(temp);
  }
  return output;
}

function johnLennonFacts(arr){
  let output = [], counter = 0;
  
  while(counter < arr.length){
    output.push(arr[counter] + "!!!");
    counter++;
  }
  return output;
}

function iLoveTheBeatles(num){
  let output = [], counter = 0;
  
  do {
    output.push("I love the Beatles!");
    counter++;
  } 
  while(counter <= num  && num < 15);
  
  return output;
}