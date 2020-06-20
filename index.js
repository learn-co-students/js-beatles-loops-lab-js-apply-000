// add solution here

function theBeatlesPlay(mus, inst){
  
  var list = []; 
  
  for(var i=0; i< mus.length; i++){
    list.push(mus[i] + " plays " + inst[i])
    
  }
  return list; 
  
}

function johnLennonFacts(facts){
  var ctr = 0;
  while( ctr< facts.length){
    facts[ctr] += '!!!';
    ctr++
  } 
  
  return facts;
}



function iLoveTheBeatles(num){
  
  var list = [];
  
  var ctr = 0;
  do{
    
    list.push("I love the Beatles!");
    
      ctr ++;
  }while(ctr<= num && num < 15);
  
  
  return list;
}






