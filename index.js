// add solution here
function theBeatlesPlay(mems,instruments){
  
  let result = [];
  
  for(let i = 0; i < mems.length; i++){
    
    let words = `${mems[i]} plays ${instruments[i]}`
    
    result.push(words);
    
  }
  
  return result; 
}

function johnLennonFacts(arr){
  
  let result = []
  
  while(result.length < arr.length){
    
   for(let i = 0; i < arr.length; i++){
    let words = arr[i] + '!!!';
    result.push(words);
   }
    
  }
  
  return result; 
  
}


const iLoveTheBeatles = num =>{
  let result = []; 
  
  do {
    result.push('I love the Beatles!')
    num++;
  } while (num < 15)
  
  return result; 
}























