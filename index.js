// add solution here
function theBeatlesPlay(musicians, instruments){
  var result = []
  for (let i = 0; i < musicians.length; i++){
    result.push( musicians[i] + " plays " + instruments[i])
  }
  return result;
}

function johnLennonFacts(facts){
  let i = 0;
  var result =[];
  while (i < facts.length){
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}
function iLoveTheBeatles(num){
  let newarr = [];
  do{
    newarr.push("I love the Beatles!");
    num++;
  }while (num < 15);
  
  return newarr;
}