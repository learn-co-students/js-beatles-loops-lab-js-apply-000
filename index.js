// add solution here
function theBeatlesPlay(musicians,instruments){
  var output = [];
  var theBand = "";
  
  for (let i = 0; i < musicians.length; i++ ){
    theBand = musicians[i] + " plays " + instruments[i]
    output.push(theBand)
  }
  
  return output
}

function johnLennonFacts(facts){  
  var i = 0;
  var newFacts = [];
  
  while (i < facts.length){
  newFacts.push(facts[i]  + "!!!")
   i++;
 } 
 
 return newFacts
}

function iLoveTheBeatles(num){
  let arr = [];
  
  do{
    arr.push("I love the Beatles!");
    num++;
  } 
  while (num < 15);
  
  return arr
} 
