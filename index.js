function theBeatlesPlay (musicians , insturments) {
  var myArray = [];
  for(var i = 0; i<musicians.length; i++) {
    var m = musicians[i];
    var ins = insturments[i];
    
     var result =   m +  ' '  + 'plays' + ' ' + ins;
     myArray.push(result)
    
    
  }
   return myArray
     
}
theBeatlesPlay()
function johnLennonFacts (facts) {
  var  i = 0;
  var result = []
  
  while(i<facts.length) {
     
   var fun = facts[i] + "!!!";
   
    result.push(fun)
    
     i++
  
    
     
     
    
    
  }
  return result;
  
}
johnLennonFacts()

 function iLoveTheBeatles(number) {
  var result = [];
  do {
  
    result.push("I love the Beatles!");
    
    number++;
  }
  while(number < 15)
    
    return result;
  
   
 }
 iLoveTheBeatles(7);
 
