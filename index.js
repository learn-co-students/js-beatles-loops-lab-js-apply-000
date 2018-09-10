// add solution here
function theBeatlesPlay (musicians, instruments){
  
  let array = [];
  
  for (let i = 0; i< musicians.length; i++){
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  
  return array;
}

function johnLennonFacts (facts){
  
  let index = 0;
  let array = [];
  
  while (index < facts.length){
    
    array[index] = facts[index] + '!!!';
    index++;
  }
  
  return array;
}

function iLoveTheBeatles(num){

  let array = [];
  
  do {
    
    array.push("I love the Beatles!")
    num++;
    
  } 
  
  while (num < 15);
  
  return array;
}

