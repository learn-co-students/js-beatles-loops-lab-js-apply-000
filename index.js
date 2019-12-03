// add solution here
function theBeatlesPlay(musicians,instruments){
  var result=[];
  for(let i=0;i<musicians.length;i++){
    result.push(musicians[i] +" plays "+ instruments[i]);
  };
  return result;
}


function johnLennonFacts(facts){
    let final=[];
    let i=0;
        while(i<facts.length){
          final.push(facts[i]+ "!!!");
          i++;
        }
          return final;
    }
    
    
    
function iLoveTheBeatles(num){
  
  let result=[];
  
    do{
      result.push("I love the Beatles!");
      num++;
    }while(num<15);
    
      return result;
}