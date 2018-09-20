// add solution here


function theBeatlesPlay(musicians, instruments) {
  var a = [];
  for (var i = 0; i < musicians.length; i++) {
  a.push(musicians[i] + " plays " + instruments[i])
}
return a;
}

function johnLennonFacts(facts) {
  var b = 0;
  var a = [];
  while (b < facts.length) {  
    a.push(facts[b] + "!!!");
    b++;
  }  
  return a
}


function iLoveTheBeatles(number){
   var statement = [] 
   var i = number
   do {statement.push('I love the Beatles!')
      i++;
     
   }
   while (i < 15)
   
   return statement
 }
  

  

