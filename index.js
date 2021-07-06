function theBeatlesPlay (musicians,instruments) {        //parameters
var Array =  [];                                         //empty Array
for (let i = 0, m = musicians.length; i < m;  i++) {     //for loop

Array.push(`${musicians[i]} plays ${instruments[i]}`);
}

return Array;
}


////////////////////////////////////////////////////////

function johnLennonFacts(facts) {
 var shoutedFacts = [];
  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`);
    i++ ; 
  }
  
  return shoutedFacts;
 }

////////////////////////////////////////////////////////

function iLoveTheBeatles(n) {           // set (n) for the while loop
var Array = [];                           //empty Array
  
 do {                                       // do loop
Array.push("I love the Beatles!");  // return the Array with "I love the Beatles "
    n++; 
  }
  
  while (n < 15);                       //parameters less than15
  return Array;
    }









