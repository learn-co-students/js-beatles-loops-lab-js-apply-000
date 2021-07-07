// add solution here
function theBeatlesPlay(musicians, instruments){
  let newStr = "";
  let musiciansGroup = [];
  for(let i = 0; i < musicians.length; i++){
       musiciansGroup.push(musicians[i] +  " plays " + instruments[i]);
      
  }
    
    return musiciansGroup;
}

function johnLennonFacts(facts){
  let exclamPoint = [];
  let i = 0;
  while(i < facts.length){
    exclamPoint.push(facts[i] + "!!!");
     i += 1;
  }
  return exclamPoint;
}

function iLoveTheBeatles(num){
  let finArr = [];
  let i = 0;
  do {
    i = i + 1;
    finArr.push("I love the Beatles!");
    
  } while(i < 15 - num);  
   return finArr;
}
  

 
