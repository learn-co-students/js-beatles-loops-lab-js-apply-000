// add solution here

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let counter = 0; counter < musicians.length; counter++){
    arr.push(`${musicians[counter]} plays ${instruments[counter]}`)
  }
  return arr;
}


function johnLennonFacts(facts){
  var arr = [];
  let counter = 0;
  while(counter < facts.length){
    arr.push(`${facts[counter]}!!!`)
    counter++;
  }
  return arr;
}

function iLoveTheBeatles(num){
var arr = [];
do {
  arr.push("I love the Beatles!")
  num++;
}

while(num < 15)
return arr;
}  
  
