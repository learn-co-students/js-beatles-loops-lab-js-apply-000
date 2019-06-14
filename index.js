// add solution here
function theBeatlesPlay(arr1, arr2){
  var fullArr = [];
  
  for(var i = 0; i < arr1.length; i++){
    var phrase = `${arr1[i]} plays ${arr2[i]}`;
    fullArr.push(phrase);
  }
  return fullArr
}

function johnLennonFacts(arr){
  var n = 0;
  var loudFacts= [];
  while(n < arr.length ){
    loudFacts.push(`${arr[n]}!!!`);
    n++;
  }
  return loudFacts;
}

function iLoveTheBeatles(num){
  var beatlesLove = [];
  do{
    beatlesLove.push("I love the Beatles!");
    num++;
    
  } while(num < 15);
  
  return beatlesLove;
  
}

