// add solution here

function theBeatlesPlay( musicians, instruments){
    
  let array = []
  
  for ( let i = 0; i < musicians.length; i++){
    
       let band = musicians[i] +  " plays " +instruments[i]
      array.push(band)
    }
    return array
  
}  

function johnLennonFacts(facts){
  let array =[]
    let i = 0;
    while(i < facts.length){
      array.push(facts[i] + "!!!")
      i++
    }
    return array
  }
  
  function iLoveTheBeatles( number){
    
    let num = []
    let i = number;
    do{
      num.push("I love the Beatles!")
      i++;
    }while(i < 15)
    
    return num
  }
  
  