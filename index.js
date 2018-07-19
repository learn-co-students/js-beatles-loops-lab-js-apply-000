// add solution here

function theBeatlesPlay(musicians, instruments){
  let array =[];
  for (let index = 0, l = musicians.length; index < l; index++){
    
     array.push(musicians[index] + " plays " + instruments[index]);
  }
  return array
}





function johnLennonFacts(facts){
  let array = [];
    let i = 0;
    while (i < facts.length) {
        
        array.push(facts[i] + "!!!");
        i++;
 }
 return array 

}

function iLoveTheBeatles(number){
let array = [];
let text = "I love the Beatles!"

 do {
  array.push(text)
  ++number
    
  }  while(number < 15);
  
    
  
 return array
  
 }


 

  
  
