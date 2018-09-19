// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
 
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return array;
}
  
  function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length) {
    array.push(facts[i] + "!!!");
   i++;
  }
  
  return array;
}
    // performs the loopbody if it recieves anything indexed below 4.
    //loopbody must take the array, add !!! to end of each string, and return the array.
    while (i < 4) {
      array.push(`${array[i]} "!!!"`);
     return array;
     }
     
  
  function iLoveTheBeatles(number) {
    var array = [];
    
    do {
      array.push("I love the Beatles!");
      number++;
    }
    
    while (number < 15);
    
    return array;
    
  }