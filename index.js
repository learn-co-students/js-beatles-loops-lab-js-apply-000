// add solution here
function theBeatlesPlay (musicians, instruments){
  let emptyArray = []
  
  for(let i = 0; i<musicians.length; i++) {
    emptyArray.push(musicians[i] +' plays ' + instruments[i])
  }
  return emptyArray;
}

function johnLennonFacts (facts){
  let newArray = []
  let count = 0 
  
  while(facts.length > count){
   newArray.push(facts[count] + "!!!")
    count++; 
  }
  return newArray
}

function iLoveTheBeatles (num){
  let emptyArr = [];
  
    do {
      emptyArr.push("I love the Beatles!");
      num++; }
      
      while(num<15); 
    
    return emptyArr;
}