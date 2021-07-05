// add solution here

function theBeatlesPlay(musician, instruments){
  var empty = [];
    for(let i=0; i < musician.length; i++){
      empty.push(`${musician[i]} plays ${instruments[i]}`);
    }
  return empty;  
}




function johnLennonFacts(facts){
  var empty = [];
  var i = 0;
  while (i < facts.length){
    empty.push(facts[i] + "!!!")
    i++;
  }
  return empty;
  
}


function iLoveTheBeatles(number){
  var empty = [];
     do {
        empty.push("I love the Beatles!");
        number++;
    }
    while (number < 15);
     
  return empty;
}






